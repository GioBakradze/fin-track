import firebase from 'firebase'

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

export function fetchCategories(uid) {
    return {
        type: 'FETCH_CATEGORIES',
        payload: firebase.database().ref(`/users/${uid}/categories`).once('value')
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
        });

        // console.log(uid, name);
        //
        // firebase.database().ref(`/users/${uid}/categories`).push({
        //     title: name
        // });
    }
}
