import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {stateType} from './redux/state';

type AppType = {
    state: stateType
    addNewPost: (postMessage: string) => void

}

function App(props: AppType) {
    return (

        <div className="container">
            <Header/>
            <Navbar/>
            <div className="container-content">
                <Route path="/profile" render={() =>
                    <Profile addNewPost={props.state.profile.addNewPost}
                             posts={props.state.profile.posts}/>}/>
                <Route path="/dialogs" render={() =>
                    <Dialogs DialogsData={props.state.dialog.DialogsData}/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
