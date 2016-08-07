import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import user from './user';
import session from './session';
import loading from './loading';

const rootReducer = combineReducers({categories, user, session, loading, routing: routerReducer});

export default rootReducer;
