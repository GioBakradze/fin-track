import React from 'react';
import { Link } from 'react-router';

const User = React.createClass({

    isActive(path) {
        return path == this.props.location.pathname ? 'active' : '';
    },

    componentWillMount() {
        // console.log(this.props.children);
    },

    render() {
        return (
            <div>
                <div class="page-header">
                    <h1>FinTrack <small class="hidden-xs hidden-sm">Track all your finances</small></h1>
                </div>
                <ul class="nav nav-tabs">
                    <li class={this.isActive("/user")} ><Link to="/user">კატეგორიები</Link></li>
                    <li class={this.isActive("/user/reports")} ><Link to="/user/reports">რეპორტები</Link></li>
                </ul>
                <br />
                <div class="panel panel-default">
                    <div class="panel-body">
                    </div>
                </div>
            </div>
        )
    }
});

// {React.cloneElement(this.props.children, this.props)}
export default User;
