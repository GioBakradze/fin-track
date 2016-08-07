import React from 'react';

const Loader = React.createClass({

    loaderIsVisible() {
        return this.props.loading ? 'loader--visible' : '';
    },

    render() {
        return (
            <div class={`loader ${this.loaderIsVisible()}`}>
                Loading Content
            </div>
        )
    }
});

export default Loader;
