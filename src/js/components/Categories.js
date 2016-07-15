import React from 'react';
import MoneyBadge from './MoneyBadge';


const Categories = React.createClass({
    render() {
        return (
            <div>
                <MoneyBadge amount="45" expected="50" title="მეგობრებიიი" />
                <MoneyBadge amount="150" expected="50" title="გასვლები" />
            </div>
        )
    }
});

export default Categories;
