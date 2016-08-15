import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export default function onlyAuthorized(perm) {

    return function (DecoratedComponent) {

        return connect((store) => ({ session: store.session }))(

            class OnlyAuthorized extends React.Component {

                componentWillMount() {
                    if (!this.props.session.loggedIn) {
                        browserHistory.push('/');
                    }
                }

                componentWillReceiveProps(newProps) {
                    if (!newProps.session.loggedIn) {
                        browserHistory.push('/');
                    }
                }

                render() {
                    return (
                        <DecoratedComponent {...this.props} />
                    );
                }

            }

        );

    }

}
