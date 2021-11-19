import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {store} from './redux/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter basename={'/Social-network'}>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);




