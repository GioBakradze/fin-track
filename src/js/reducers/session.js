export default function (state={
    loggedIn: false,
    username: 'gio',
    uid: '',
    failed: false
}, action) {

    if (action.type == 'AUTHENTICATE_REJECTED') {
        return {
            ...state,
            failed: true
        };
    }

    return state;
}
