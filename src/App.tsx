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
    ChangeNewPostText: (newText: string) => void
    SendMessage:(message:string)=>void
    ChangeMessage: (newMessage: string) => void


}

function App(props: AppType) {
    return (

        <div className="container">
            <Header/>
            <Navbar/>
            <div className="container-content">
                <Route path="/profile" render={() =>
                    <Profile addNewPost={props.addNewPost}
                             posts={props.state.profilePage.posts}
                             ChangeNewPostText={props.ChangeNewPostText}

                    />}
                />
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        state={props.state}
                        ChangeMessage={props.ChangeMessage}
                        SendMessage={props.SendMessage}
                        DialogsData={props.state.dialogsPage}
                    />}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
