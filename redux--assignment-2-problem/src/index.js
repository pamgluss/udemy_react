import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching: ', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState())
            return result;
        }
    }
}

// code to make redux dev tools & middleware play nicely
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
