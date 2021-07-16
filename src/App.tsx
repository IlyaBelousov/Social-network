import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


// type AppPropsType = {
//     state: AppStateType
//     dispatch: (action: ProfileActionType | DialogsActionType) => void
// }

function App() {

    return (

        <div className="container">
            <Header/>
            <Navbar/>
            <div className="container-content">
                <Route path="/profile" render={() =>
                    <Profile/>}
                />
                <Route path="/dialogs" render={() =>
                    <Dialogs />}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}
export default App;
