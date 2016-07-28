import firebase from "firebase";


// fetch categories for current month
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
