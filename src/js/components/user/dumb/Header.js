import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
    render () {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                      <Link class="navbar-brand" to="/user">{this.props.email}</Link>
                    </div>
                    <div class="collapse navbar-collapse">
                         <ul class="nav navbar-nav navbar-right">
                            <li>
                                <button class="btn btn-primary navbar-btn" onClick={this.props.logout}>Log Out</button>
                            </li>
                         </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
