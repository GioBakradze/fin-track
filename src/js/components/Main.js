import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

    render() {
        return (
            <div class="container main">
                <div>{React.cloneElement(this.props.children, this.props)}</div>
            </div>
        )
    }

});

// <div>{React.cloneElement(this.props.children, this.props)}</div>

export default Main;
