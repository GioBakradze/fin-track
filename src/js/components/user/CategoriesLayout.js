import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCategories } from './../../actions/userActions'

@connect((store) => ({ categories: store.categories, session: store.session }), (dispatch) => bindActionCreators({ fetchCategories }, dispatch))
export default class CategoriesLayout extends React.Component {

    componentWillMount() {
        this.props.fetchCategories(this.props.session.user.uid);
    }

    render () {
        return (
            <div>
                there are cats LD
            </div>
        )
    }
}
