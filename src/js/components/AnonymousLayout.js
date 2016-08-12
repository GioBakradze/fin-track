import React from "react"

export default class AnonymousLayout extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
