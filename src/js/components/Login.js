import React from 'react';

const Login = React.createClass({

    render() {

        return (
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3 ">
                    <div class="panel panel-default">
                        <div class="panel-heading">Login</div>
                        <div class="panel-body">

                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-default">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Login;
