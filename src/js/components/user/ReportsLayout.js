import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllData } from './../../actions/userActions'

@connect((store) => ({ categories: store.categories, session: store.session }), (dispatch) => bindActionCreators({ fetchAllData }, dispatch))
export default class ReportsLayout extends React.Component {

    componentWillMount() {
        this.props.fetchAllData(this.props.session.user.uid);
    }

    render () {
        return (
            <div>
                there are reports
            </div>
        )
    }
}
