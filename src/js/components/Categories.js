import React from 'react';
import MoneyBadge from './MoneyBadge';

const Categories = React.createClass({

    componentWillMount() {
        console.log('fetch cats');
        this.props.fetchCategories();
    },

    render() {
        return (
            <div>
                {this.props.categories.map( (e, i) => <MoneyBadge key={i} amount={e.amount} expected={e.expected} title={e.title} /> )}
            </div>
        )
    }

});

export default Categories;
