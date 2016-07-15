import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

    isActive(path) {
        return path == this.props.location.pathname ? 'active' : '';
    },

    render() {
        return (
            <div class="container main">
                <div class="page-header">
                    <h1>FinTrack <small class="hidden-xs hidden-sm">Track all your finances</small></h1>
                </div>
                <ul class="nav nav-tabs">
                    <li class={this.isActive("/")} ><Link to="/">კატეგორიები</Link></li>
                    <li class={this.isActive("/reports")} ><Link to="/reports">რეპორტები</Link></li>
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

//

export default Main;
