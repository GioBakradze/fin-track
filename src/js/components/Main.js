import React from 'react'

const Main = React.createClass({

    render() {
        return (
            <div class="container main">
                <div>{this.props.children}</div>
            </div>
        )
    }

});

// <div>{React.cloneElement(this.props.children, this.props)}</div>

export default Main;
