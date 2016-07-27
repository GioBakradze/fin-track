export function session(state = {}, action) {

    if (action.type == "AUTHENTICATE_FULFILLED") {
        return {
            failed: false
        };
    }

    if (action.type == "AUTHENTICATE_REJECTED") {
        return {
            failed: true
        };
    }

    return state;
}

export default session;
