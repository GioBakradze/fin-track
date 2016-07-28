// a reducer takes in two things:
// 1. the action (info about what happend)
// 2. copy of current state

export function categories(state = [], action) {


    if (action.type == "FETCH_CATEGORIES_FULFILLED") {
        // return [...action.payload.data];
        return [...action.payload.val()];
    }

    return state;
}

export default categories;
