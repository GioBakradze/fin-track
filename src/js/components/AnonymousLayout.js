import React from 'react'
import onlyAnonymous from './../decorators/onlyAnonymous'

@onlyAnonymous()
export default class AnonymousLayout extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
