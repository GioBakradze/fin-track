import firebase from 'firebase';

export function user(state = {}, action) {

    if (action.type == "AUTHENTICATE_FULFILLED") {

        localStorage.setItem('fin-track-user', JSON.stringify({
            email: action.payload.email,
            uid: action.payload.uid
        }));

        return {
            email: action.payload.email,
            uid: action.payload.uid
        };
    }

    if (action.type == "AUTHENTICATE_REJECTED") {
        return {};
    }

    if (action.type == "LOG_OUT_FULFILLED") {
        localStorage.removeItem('fin-track-user');
        return {};
    }

    return state;
}

export default user;
