import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {ProfileContainer} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {UsersContainer} from './components/Users/UsersContainer';
import {HeaderWithConnect} from './components/Header/HeaderContainer';
import {Login} from './Login/Login';


function App() {

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

export default App;
