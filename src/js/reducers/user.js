
const defaultUserState = {
    failed: false
};

export function user(state = defaultUserState, action) {


    if (action.type == "AUTHENTICATE_REJECTED") {
        return {
            failed: true
        }
    }

    return state;
}

export default user;
