import React from 'react';

const Main = React.createClass({
    render() {
        return (
            <div class="container main">
                <div class="page-header">
                    <h1>FinTrack <small>Track all your finances</small></h1>
                </div>

            </div>
        )
    }
});

// {React.cloneElement(this.props.children, this.props)}

export default Main;
