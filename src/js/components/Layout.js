import React from "react"

export default class Layout extends React.Component {
    render () {
        return (
            <div class="container main">
                {this.props.children}
            </div>
        )
    }
}
