import _ from 'lodash'

export default function (state=[], action) {

    if (action.type == 'FETCH_CATEGORIES_FULFILLED') {



        return _.map(action.payload.categories, function (e, key) {
            // console.log(e, key);

            _.forEach(action.payload.)

            return {};
        });

        // return _.isNull(action.payload.val()) ? [] : action.payload.val();
    }


    return state;
}
