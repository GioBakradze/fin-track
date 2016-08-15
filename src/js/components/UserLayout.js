import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import onlyAuthorized from './../decorators/onlyAuthorized'

// components
import Header from './user/dumb/Header'
import HeaderMenu from './user/dumb/HeaderMenu'

// actions
import { logoutUser } from './../actions/userActions'

@onlyAuthorized()
@connect((store) => ({ session: store.session }), (dispatch) => bindActionCreators({ logoutUser }, dispatch))
export default class UserLayout extends React.Component {
    render () {
        return (
            <div>
                <Header email={this.props.session.user.email} logout={this.props.logoutUser} />
                <HeaderMenu location={this.props.location} />

                <br />

                <div class="panel panel-default">
                    <div class="panel-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
