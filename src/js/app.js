import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'

import {history, store} from './store'

import Layout from './components/Layout'
import AnonymousLayout from './components/AnonymousLayout'
import UserLayout from './components/UserLayout'
import LoginLayout from './components/anonymous/LoginLayout'

// Import css
import css from './../styles/styles.styl'
import firebaseSetup from './firebaseSetup'

firebaseSetup();

const app = document.getElementById('app')

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>

            <Route path="/" component={Layout}>
                <IndexRedirect to="/u/login"></IndexRedirect>

                <Route path="u" component={AnonymousLayout}>
                    <Route path="login" component={LoginLayout}></Route>
                </Route>

                <Route path="user" component={UserLayout}>
                </Route>

            </Route>

        </Router>
    </Provider>
), app);
