import { applyMiddleware, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger());

export const store = createStore(reducer, middleware);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
