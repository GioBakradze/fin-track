export function categories(state = [], action) {

    if (action.type == "SETUP_DATA_STRUCTURE_FULFILLED" && action.payload.hasOwnProperty('categories')) {

        console.log(action.payload);
        // return [...action.payload.val()];
    }

    return state;
}

export default categories;
