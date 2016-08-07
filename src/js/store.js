import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
    categories: [],
    user: JSON.parse(localStorage.getItem('fin-track-user')) || {},
    session: {
        failed: false
    },
    loading: 0
};

const middleware = applyMiddleware(promise(), thunk, logger());
export const store = createStore(rootReducer, defaultState, middleware);
export const history = syncHistoryWithStore(browserHistory, store);


export default store;
