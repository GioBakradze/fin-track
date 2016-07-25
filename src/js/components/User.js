import React from 'react';
import { Link } from 'react-router';

const User = React.createClass({

    isActive(path) {
        return path == this.props.location.pathname ? 'active' : '';
    },

    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li class={this.isActive("/user/")} ><Link to="/">კატეგორიები</Link></li>
                    <li class={this.isActive("/user/reports")} ><Link to="/reports">რეპორტები</Link></li>
                </ul>
                <br />
                <div class="panel panel-default">
                    <div class="panel-body">
                        {React.cloneElement(this.props.children, this.props)}
                    </div>
                </div>
            </div>
        )
    }
});


export default User;
