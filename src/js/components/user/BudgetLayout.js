import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBudget } from './../../actions/userActions'
import _ from 'lodash'

@connect((store) => ({ categories: store.categories, session: store.session }), (dispatch) => bindActionCreators({ fetchBudget }, dispatch))
export default class BudgetLayout extends React.Component {

    componentWillMount() {
        this.props.fetchBudget(this.props.session.user.uid);
    }

    render () {
        return (
            <table class="table">
                <thead>
                    <tr>
                        {_.getMonthsTitles().map( (e, i) => <th key={i}>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        )
    }
}
