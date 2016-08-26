import React from 'react'
import { Link } from 'react-router'

export default class HeaderMenu extends React.Component {

    constructor() {
        super();
        this.isActive = this.isActive.bind(this);
    }

    isActive(path) {
        return path == this.props.location.pathname ? 'active' : '';
    }

    render () {
        return (
            <ul class="nav nav-tabs">
                <li class={this.isActive("/user/categories")} ><Link to="/user/categories">Categories</Link></li>
                <li class={this.isActive("/user/budget")}><Link to="/user/budget">Budget</Link></li>
                <li class={this.isActive("/user/reports")} ><Link to="/user/reports">Reports</Link></li>
            </ul>
        )
    }
}
