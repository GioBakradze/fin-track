import _ from 'lodash'

export default function (state = [], action) {

    if (action.type == 'FETCH_BUDGET_FULFILLED') {

        return  _.map(action.payload.categories, (e, key) => {
            return {
                ...e,
                amounts: _.getCurrentYearMonths().map( (month) => {

                    return _.chain(action.payload.budget)
                        .filter((v) => v.catId == key && _.yearAndMonthMatches(month, v.timestamp))
                        .reduce((sum, v) => sum + v.amount , 0)
                        .value();

                })
            };
        });

    }

    return state;
}
