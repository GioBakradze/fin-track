import axios from "axios";

// fetch categories for current month
export function fetchCategories() {
    return {
        type: 'FETCH_CATEGORIES',
        payload: axios.get('/data/categories.json')
    }
}

// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}


// remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}
