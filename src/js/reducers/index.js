import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import user from './user';

const rootReducer = combineReducers({categories, user, routing: routerReducer});

export default rootReducer;
