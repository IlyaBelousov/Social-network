import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter,Route} from 'react-router-dom';
import Dialogs, { DialogItemType } from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



let DialogsData:Array<DialogItemType> = [
    {id: 1, username: 'Liza', message: 'Hey'},
    {id: 2, username: 'Denchik', message: 'Hey'},
    {id: 3, username: 'Leo', message: 'Hey'},
    {id: 4, username: 'Brodiyagi', message: 'Hey'}
];


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                <div className='container-content'>
                    <Route path='/profile' render={ ()=> <Profile/>} />
                    <Route path='/dialogs' render={ ()=> <Dialogs DialogsData={DialogsData} />} />
                    <Route path='/music' render={ ()=> <Music/>} />
                    <Route path='/settings' render={ ()=> <Settings/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
