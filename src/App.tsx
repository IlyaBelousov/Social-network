import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {ProfileContainer} from './components/Profile/Profile';
import {Route, withRouter} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {UsersContainer} from './components/Users/UsersContainer';
import {HeaderWithConnect} from './components/Header/HeaderContainer';
import {Login} from './Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import {initialiseApp} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader";

type AppPropsType = {
    initialiseApp: () => void
} & ReturnType<typeof MapStateToProps>

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.isInitialised) {
            return <Preloader/>
        }
        return (
            <div className="container">
                <HeaderWithConnect/>
                <Navbar/>
                <div className="container-content">
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}
                    />
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}/>
                    <Route path="/users" render={() =>
                        <UsersContainer/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        isInitialised: state.app.isInitialised
    };
};

export default compose<React.ComponentType>(
    connect(MapStateToProps, {initialiseApp}),
    withRouter
)(App)
