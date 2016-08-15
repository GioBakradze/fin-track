export default function (state = 0, action) {

    if (action.type.endsWith('_PENDING')) {
        return state + 1;
    }

    if (action.type.endsWith('_FULFILLED')) {
        return state - 1;
    }

    return state;
}
