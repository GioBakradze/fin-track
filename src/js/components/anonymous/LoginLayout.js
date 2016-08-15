import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { authenticateUser } from './../../actions/userActions'

@connect((store) => ({ session: store.session }), (dispatch) => bindActionCreators({ authenticateUser }, dispatch))
export default class LoginLayout extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.authenticateUser(this.refs.email.value, this.refs.password.value);
    }

    showErrorMessage() {
        return this.props.session.failed ? '' : 'hidden-all'
    }

    render () {
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
}
