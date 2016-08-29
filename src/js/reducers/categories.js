import _ from 'lodash'

export default function (state=[], action) {

    if (action.type == 'FETCH_ALL_DATA_FULFILLED') {
        
        var res = _.map(action.payload.categories, (e, key) => {
            var amount = _.chain(action.payload.logs)
                .filter((v) => v.catId == key)
                .filter((v) => _.yearAndMonthMatches(_.now()) == _.yearAndMonthMatches(v.timestamp))
                .reduce((sum, v) => sum + v.amount , 0)
                .value();

            var expected = _.chain(action.payload.budget)
                .filter((v) => v.catId == key)
                .filter((v) => _.yearAndMonthMatches(_.now()) == _.yearAndMonthMatches(v.timestamp))
                .reduce((sum, v) => sum + v.amount , 0)
                .value();

            return {
                title: e.title,
                amount,
                expected
            };
        });

        return res;
    }


    return state;
}
