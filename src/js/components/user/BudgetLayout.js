import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBudget, updateBudget } from './../../actions/userActions'
import _ from 'lodash'
import NumberBadge from './dumb/NumberBadge'

@connect((store) => ({ budget: store.budget, session: store.session }), (dispatch) => bindActionCreators({ fetchBudget, updateBudget }, dispatch))
export default class BudgetLayout extends React.Component {

    constructor() {
        super();
        this.output = this.output.bind(this);
        this.budgetUpdate = this.budgetUpdate.bind(this);
    }

    componentWillMount() {
        this.props.fetchBudget(this.props.session.user.uid);
    }

    budgetUpdate(indexAsMonth, catId) {
        const month = new Date(_.getYearFromTimestamp(_.now()), indexAsMonth).getTime();
        const that = this;

        return function (amount) {
            that.props.updateBudget(that.props.session.user.uid, month, amount, catId);
        }
    }

    output() {
        return this.props.budget.map( (e, i) => (
            <tr key={i}>
                <td>{e.title}</td>
                {e.amounts.map((v, i2) => <td key={i2}> <NumberBadge value={v} update={this.budgetUpdate(i2, e.catId)} /> </td>)}
            </tr>
        ));
    }

    render () {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th>კატეგორია</th>
                        {_.getMonthsTitles().map( (e, i) => <th key={i}>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.output()}
                </tbody>
            </table>
        )
    }
}
