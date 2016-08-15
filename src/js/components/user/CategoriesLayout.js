import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCategories, addNewCategory } from './../../actions/userActions'

import AddCategory from './dumb/AddCategory'

@connect((store) => ({ categories: store.categories, session: store.session }), (dispatch) => bindActionCreators({ fetchCategories, addNewCategory }, dispatch))
export default class CategoriesLayout extends React.Component {

    constructor() {
        super();
        this.add = this.add.bind(this);
    }

    componentWillMount() {
        this.props.fetchCategories(this.props.session.user.uid);
    }

    add(name) {
        this.props.addNewCategory(this.props.session.user.uid, name);
    }

    render () {
        return (
            <div>
                <AddCategory addCategory={this.add} />
            </div>
        )
    }
}
