import firebase from "firebase";


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
