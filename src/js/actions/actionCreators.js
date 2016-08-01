import firebase from 'firebase'
import _ from 'lodash'

export function setupDataStructure(uid) {
    return function (dispatch) {
        dispatch({
            type: 'SETUP_DATA_STRUCTURE_PENDING',
            payload: {}
        });

        firebase.database().ref(`/users/`).once('value').then(function (data) {
            if (!data.val().hasOwnProperty(uid)) {
                console.log('need data structure');

                firebase.database().ref(`/users/${uid}`).set({
                    categories: [{
                        title: 'კატეგორია'
                    }],
                    logs: [{
                        catId: 0,
                        timestamp: _.now(),
                        amount: 0
                    }],
                    budget: [{
                        month: new Date(_.now()).getMonth(),
                        catId: 0,
                        amount: 0
                    }]
                }).then(function () {
                    console.log('structure created');
                });

            } else {
                console.log('data structure already created');

                dispatch({
                    type: 'SETUP_DATA_STRUCTURE_FULFILLED',
                    payload: {}
                });
            }
        });
    }
}


export function fetchCategories(uid) {
    return {
        type: 'FETCH_CATEGORIES',
        payload: firebase.database().ref(`/users/${uid}/categories`).once('value')
    }
}



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
