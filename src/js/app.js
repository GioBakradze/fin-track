import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'

import {history, store} from './store'

import Layout from './components/Layout'
import Loader from './components/Loader'
import AnonymousLayout from './components/AnonymousLayout'
import UserLayout from './components/UserLayout'
import LoginLayout from './components/anonymous/LoginLayout'
import CategoriesLayout from './components/user/CategoriesLayout'
import ReportsLayout from './components/user/ReportsLayout'

// Import css
import css from './../styles/styles.styl'
import firebaseSetup from './firebaseSetup'

firebaseSetup();

const app = document.getElementById('app')

ReactDOM.render((
    <div>
        <Provider store={store}>
            <Router history={history}>

                <Route path="/" component={Layout}>
                    <IndexRedirect to="/u/login"></IndexRedirect>

                    <Route path="u" component={AnonymousLayout}>
                        <Route path="login" component={LoginLayout}></Route>
                    </Route>

                    <Route path="user" component={UserLayout}>
                        <IndexRedirect to="categories"></IndexRedirect>

                        <Route path="categories" component={CategoriesLayout}></Route>
                        <Route path="reports" component={ReportsLayout}></Route>

                    </Route>

                </Route>

            </Router>
        </Provider>
        <Loader store={store} />
    </div>
), app);
