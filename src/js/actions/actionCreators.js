import firebase from 'firebase'
import defaultDataStructure from './../utils/defaultDataStructure'

export function setupDataStructure(uid) {
    return function (dispatch) {
        dispatch({
            type: 'SETUP_DATA_STRUCTURE_PENDING',
            payload: {}
        });

        firebase.database().ref(`/users/`).once('value').then(function (data) {
            if (!data.val().hasOwnProperty(uid)) {

                firebase.database().ref(`/users/${uid}`).set(defaultDataStructure()).then(function () {
                    dispatch({
                        type: 'SETUP_DATA_STRUCTURE_FULFILLED',
                        payload: {}
                    });
                });

            } else {
                dispatch({
                    type: 'SETUP_DATA_STRUCTURE_FULFILLED',
                    payload: data.val()[uid]
                });
            }
        });
    }
}


// export function fetchCategories(uid) {
//     return {
//         type: 'FETCH_CATEGORIES',
//         payload: firebase.database().ref(`/users/${uid}/categories`).once('value')
//     }
// }

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
