import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import user from './user';
import session from './session';

const rootReducer = combineReducers({categories, user, session, routing: routerReducer});

export default rootReducer;
