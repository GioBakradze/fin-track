import React from 'react';
import MoneyBadge from './MoneyBadge';

const Categories = React.createClass({

    componentWillMount() {
        // this.props.fetchCategories(this.props.user.uid);
    },

    render() {
        return (
            <div>
                Categories
            </div>
        )
    }

});

// {this.props.categories.map( (e, i) => <MoneyBadge key={i} amount={e.amount} expected={e.expected} title={e.title} /> )}

export default Categories;
