import firebase from 'firebase';

export function user(state = {}, action) {

    if (action.type == "AUTHENTICATE_FULFILLED") {
        return {
            email: action.payload.email
        };
    }

    if (action.type == "AUTHENTICATE_REJECTED") {
        return {};
    }

    return state;
}

export default user;
