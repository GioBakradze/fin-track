import React from 'react'
import { Link } from 'react-router'
import connectToState from './../utils/connectToState'
import { browserHistory } from 'react-router'

const User = React.createClass({

    isActive(path) {
        return path == this.props.location.pathname ? 'active' : '';
    },

    logOut() {
        this.props.logoutUser();
    },

    // TODO: here also, but reverse is true
    componentWillMount() {
        if (!this.props.user.hasOwnProperty('email')) {
            browserHistory.push('/');
        }
    },

    componentWillReceiveProps(newProps) {
        if (!newProps.user.hasOwnProperty('email')) {
            browserHistory.push('/');
        }
    },

    render() {
        return (
            <div>

                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                          <Link class="navbar-brand" to="/user">{this.props.user.email}</Link>
                        </div>
                        <div class="collapse navbar-collapse">
                             <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <button class="btn btn-primary navbar-btn" onClick={this.logOut}>Log Out</button>
                                </li>
                             </ul>
                        </div>
                    </div>
                </nav>

                <ul class="nav nav-tabs">
                    <li class={this.isActive("/user")} ><Link to="/user">Categories</Link></li>
                    <li class={this.isActive("/user/reports")} ><Link to="/user/reports">Reports</Link></li>
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

// {React.cloneElement(this.props.children, this.props)}
export default connectToState(User);
