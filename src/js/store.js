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
    user: {},
    session: {
        failed: false
    }
};

// const enhancers = compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const middleware = applyMiddleware(promise(), thunk, logger());
export const store = createStore(rootReducer, defaultState, middleware);
export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
//     module.hot.accept('./reducers/', () => {
//         const nextRootReducer = require('./reducers/index').default();
//         store.replaceReducer(nextRootReducer);
//     });
// }

export default store;
