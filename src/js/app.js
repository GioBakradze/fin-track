import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRedirect } from 'react-router'

import {history, store} from "./store"

import Layout from "./components/Layout"
import AnonymousLayout from "./components/AnonymousLayout"
import LoginLayout from "./components/anonymous/LoginLayout"

const app = document.getElementById('app')

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>

            <Route path="/" component={Layout}>
                <IndexRedirect to="/u/login"></IndexRedirect>

                <Route path="u" component={AnonymousLayout}>
                    <Route path="login" component={LoginLayout}></Route>
                </Route>

            </Route>

        </Router>
    </Provider>
), app);
