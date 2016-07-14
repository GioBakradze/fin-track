// a reducer takes in two things:
// 1. the action (info about what happend)
// 2. copy of current state

function postComments(state = [], action) {

    switch (action.type) {
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // return without comment
            return [
                // from start to element we want to delete
                ...state.slice(0, action.i),
                // after our deleting element
                ...state.slice(action.i + 1)
            ];
    }

    return state;
}


export function comments(state = [], action) {

    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,

            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments;
