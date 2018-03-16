import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import { store } from './store';
import './index.css';
import App from './components/App';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <App />
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
