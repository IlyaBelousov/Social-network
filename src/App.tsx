import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsActionType, ProfileActionType, stateType} from './redux/state';

type AppPropsType = {
    state: stateType
    dispatch: (action: ProfileActionType | DialogsActionType) => void
}

function App(props: AppPropsType) {
    return (

        <div className="container">
            <Header/>
            <Navbar/>
            <div className="container-content">
                <Route path="/profile" render={() =>
                    <Profile dispatch={props.dispatch}
                             posts={props.state.profilePage.posts}
                    />}
                />
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        state={props.state}
                        dispatch={props.dispatch}
                        DialogsData={props.state.dialogsPage}
                    />}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}
export default App;
