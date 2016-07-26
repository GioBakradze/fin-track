import axios from "axios";
import firebase from "firebase";

// fetch categories for current month
export function fetchCategories() {
    return {
        type: 'FETCH_CATEGORIES',
        payload: axios.get('/data/categories.json')
    }
}

export function authenticateUser(email, password) {
    return {
        type: 'AUTHENTICATE',
        payload: firebase.auth().signInWithEmailAndPassword(email, password)
    }
}
