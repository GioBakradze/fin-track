import React from "react"
// import { connect } from "react-redux"

// @connect((store) => {
//     return {
//         session: store.session
//     }
// })
export default class AnonymousLayout extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
