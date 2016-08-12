export default function (state={
    loggedIn: localStorage.getItem("fin-track-user") === null ? false : true,
    failed: false,
    user: JSON.parse(localStorage.getItem('fin-track-user')) || {}
}, action) {

    if (action.type == 'AUTHENTICATE_REJECTED') {
        return {
            ...state,
            failed: true
        };
    }

    if (action.type == 'AUTHENTICATE_FULFILLED') {
        const user = {
            email: action.payload.email,
            uid: action.payload.uid
        };
        localStorage.setItem('fin-track-user', JSON.stringify(user));

        return {
            loggedIn: true,
            failed: false,
            user
        };
    }

    return state;
}
