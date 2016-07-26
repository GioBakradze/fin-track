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

export default Main;
