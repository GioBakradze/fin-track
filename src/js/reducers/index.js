import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import session from "./session"
import categories from "./categories"
import loading from "./loading"
import budget from "./budget"

export default combineReducers({
    session,
    categories,
    loading,
    budget,
    routing: routerReducer
})
