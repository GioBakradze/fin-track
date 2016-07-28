import React from 'react';
import { render } from 'react-dom';
import firebaseSetup from './firebaseSetup';

// Import css
import css from './../styles/styles.styl';

// import components
import Main from './components/Main';
import Reports from './components/Reports';
import Categories from './components/Categories';
import Login from './components/Login';
import User from './components/User';

// import router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    failureRedirectPath: '/'
});

firebaseSetup();


import firebase from 'firebase'
console.log(firebase.auth().currentUser);

const router = (
    <Provider store={store}>
        <Router history={history}>

            <Route path="/" component={Main}>

                <IndexRoute component={Login}></IndexRoute>

                <Route path="user" component={UserIsAuthenticated(User)}>
                    <IndexRoute component={Categories}></IndexRoute>
                    <Route path="reports" component={Reports}></Route>
                </Route>

            </Route>

        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
