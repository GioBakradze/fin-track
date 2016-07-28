export function categories(state = [], action) {

    if (action.type == "FETCH_CATEGORIES_FULFILLED") {
        return [...action.payload.val()];
    }

    return state;
}

export default categories;
