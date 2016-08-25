import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllData, addNewCategory } from './../../actions/userActions'

import AddCategory from './dumb/AddCategory'
import MoneyBadge from './dumb/MoneyBadge'

@connect((store) => ({ categories: store.categories, session: store.session }), (dispatch) => bindActionCreators({ fetchAllData, addNewCategory }, dispatch))
export default class CategoriesLayout extends React.Component {

    constructor() {
        super();
        this.add = this.add.bind(this);
    }

    componentWillMount() {
        this.props.fetchAllData(this.props.session.user.uid);
    }

    add(name) {
        this.props.addNewCategory(this.props.session.user.uid, name);
    }

    render () {
        return (
            <div>
                {this.props.categories.map( (e, i) => <MoneyBadge key={i} amount={e.amount} expected={e.expected} title={e.title} /> )}
                <AddCategory addCategory={this.add} />
            </div>
        )
    }
}

// {this.props.categories.map( (e, i) => <MoneyBadge key={i} amount={e.amount} expected={e.expected} title={e.title} /> )}
