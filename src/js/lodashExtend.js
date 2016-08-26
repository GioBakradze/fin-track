import _ from 'lodash'

export default function lodashExtend() {

    _.mixin({
        getMonthFromTimestamp: function (timestamp) {
            return new Date(timestamp).getMonth()
        },
        getYearFromTimestamp: function (timestamp) {
            return new Date(timestamp).getYear()
        },
        getYearAndMonthFromTimestamp: function (timestamp) {
            return (new Date(timestamp).getYear()) + '-' + (new Date(timestamp).getMonth());
        },
        yearAndMonthMatches: function (timestamp1, timestamp2) {
            return _.getYearAndMonthFromTimestamp(timestamp1) == _.getYearAndMonthFromTimestamp(timestamp2);
        },
        getMonthsTitles: function () {
            return ['იანვარი', 'თებერვალი',
                    'მარტი', 'აპრილი', 'მაისი',
                    'ივნისი', 'ივლისი', 'აგვისტო',
                    'სექტემბერი', 'ოქტომბერი', 'ნოემბერი',
                    'დეკემბერი'];
        }
    });

}
