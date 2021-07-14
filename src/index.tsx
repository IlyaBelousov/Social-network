import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {store} from './redux/redux-store'
import { StoreContext } from './StoreContext';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

