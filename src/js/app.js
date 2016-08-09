import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute } from 'react-router'

import {history, store} from "./store"

import Layout from "./components/Layout"
import AnonymousLayout from "./components/AnonymousLayout"
import LoginLayout from "./components/anonymous/LoginLayout"

const app = document.getElementById('app')

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>

            <Route path="/" component={Layout}>
                <IndexRoute component={AnonymousLayout}>
                    <IndexRoute component={LoginLayout}></IndexRoute>
                </IndexRoute>
            </Route>

        </Router>
    </Provider>
), app);
