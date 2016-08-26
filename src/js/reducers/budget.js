export default function (state = [], action) {

    if (action.type == 'FETCH_BUDGET_FULFILLED') {
        console.log(action.payload);
    }

    return state;
}
