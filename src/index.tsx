import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);



