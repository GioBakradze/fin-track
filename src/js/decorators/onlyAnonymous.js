import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export default function onlyAnonymous(perm) {

    return function (DecoratedComponent) {

        return connect((store) => ({ session: store.session }))(

            class OnlyAnonymous extends React.Component {

                componentWillMount() {
                    if (this.props.session.loggedIn) {
                        browserHistory.push('/user');
                    }
                }

                componentWillReceiveProps(newProps) {
                    if (newProps.session.loggedIn) {
                        browserHistory.push('/user');
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
