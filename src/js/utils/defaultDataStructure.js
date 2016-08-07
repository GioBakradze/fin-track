import _ from 'lodash'

export default function defaultDataStructure() {
    return {
        categories: [{
            title: 'კატეგორია'
        }],
        logs: [{
            catId: 0,
            timestamp: _.now(),
            amount: 0
        }],
        budget: [{
            month: new Date(_.now()).getMonth(),
            catId: 0,
            amount: 0
        }]
    };
}
