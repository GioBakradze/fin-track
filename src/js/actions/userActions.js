import firebase from 'firebase'
import _ from 'lodash'

export function authenticateUser(email, password) {
    return {
        type: 'AUTHENTICATE',
        payload: firebase.auth().signInWithEmailAndPassword(email, password)
    }
}

export function logoutUser() {
    return {
        type: 'LOG_OUT',
        payload: firebase.auth().signOut()
    }
}

export function fetchBudget(uid) {
    return function (dispatch) {
        dispatch({
            type: 'FETCH_BUDGET_PENDING',
            payload: {}
        });

        Promise.all([
            firebase.database().ref(`/users/${uid}/categories`).once('value'),
            firebase.database().ref(`/users/${uid}/budget`).once('value')
        ]).then(function (data) {

            var res = {
                categories: _.isNull(data[0].val()) ? {} : data[0].val(),
                budget: _.isNull(data[1].val()) ? {} : data[1].val()
            };

            dispatch({
                type: 'FETCH_BUDGET_FULFILLED',
                payload: res
            });

        });
    }
}

export function updateBudget(uid, key, amount) {
    return function (dispatch) {
        dispatch({
            type: 'UPDATE_BUDGET_PENDING',
            payload: {}
        });
    }
}

export function fetchAllData(uid) {

    return function (dispatch) {

        dispatch({
            type: 'FETCH_ALL_DATA_PENDING',
            payload: {}
        });

        Promise.all([
            firebase.database().ref(`/users/${uid}/categories`).once('value'),
            firebase.database().ref(`/users/${uid}/logs`).once('value'),
            firebase.database().ref(`/users/${uid}/budget`).once('value')
        ]).then(function (data) {

            var res = {
                categories: _.isNull(data[0].val()) ? {} : data[0].val(),
                logs: _.isNull(data[1].val()) ? {} : data[1].val(),
                budget: _.isNull(data[2].val()) ? {} : data[2].val()
            };

            dispatch({
                type: 'FETCH_ALL_DATA_FULFILLED',
                payload: res
            });

        });

    }
}

export function addNewCategory(uid, name) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_CATEGORY_PENDING',
            payload: {}
        });

        var key = firebase.database().ref(`/users/${uid}/categories`).push().key;
        firebase.database().ref(`/users/${uid}/categories/${key}`).set({
            title: name
        }).then(function () {
            dispatch({
                type: 'ADD_CATEGORY_FULFILLED',
                payload: {}
            });

            dispatch(fetchAllData(uid));
        });
    }
}
