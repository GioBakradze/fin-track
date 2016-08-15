import _ from 'lodash'

export default function (state=[], action) {

    if (action.type == 'FETCH_CATEGORIES_FULFILLED') {
        return _.isNull(action.payload.val()) ? [] : action.payload.val();
    }


    return state;
}
