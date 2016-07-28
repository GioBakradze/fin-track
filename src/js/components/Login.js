import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import connectToState from './../utils/connectToState'

const Login = React.createClass({

    handleSubmit(e) {
        e.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        this.props.authenticateUser(email, password);
    },

    showErrorMessage() {
        return this.props.session.failed ? '' : 'hidden-all'
    },

    componentWillMount() {
        if (this.props.user.hasOwnProperty('email')) {
            browserHistory.push('/user');
        }
    },

    componentWillReceiveProps(newProps) {
        if (newProps.user.hasOwnProperty('email')) {
            browserHistory.push('/user');
        }
    },

    render() {

        return (
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-sm-offset-4 ">
                    <div class="panel panel-default">
                        <div class="panel-heading">Login</div>
                        <div class="panel-body">

                            <form ref="loginForm" onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <input type="email" ref="email" class="form-control" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input type="password" ref="password"  class="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>

                            <br />

                            <div class={`alert alert-danger ${this.showErrorMessage()}`}>
                                Username or password incorrect
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

// <Link to="/user">users</Link>

export default connectToState(Login);
