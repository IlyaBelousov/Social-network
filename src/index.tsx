import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import stateRoot, {addNewPost, ChangeNewPostText, subscribe} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import './index.css';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App ChangeNewPostText={ChangeNewPostText} addNewPost={addNewPost} state={stateRoot.state}/>

            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree();


subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

