import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import stateRoot from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import './index.css';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App addNewPost={stateRoot.state.profile.addNewPost} state={stateRoot.state}/>

            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


