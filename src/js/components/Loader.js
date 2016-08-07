import React from 'react'
import store from './../store'

const Loader = React.createClass({

    loaderIsVisible() {
        return this.state.loading > 0 ? 'loader--visible' : '';
    },

    getInitialState() {
        return {
            loading: 0
        }
    },

    componentWillMount() {
        this.unsubscribe = store.subscribe( () => {
            this.setState({
                loading: store.getState().loading
            });
        });
    },

    componentWillUnmount() {
        this.unsubscribe();
    },

    render() {
        return (
            <div class={`loader ${this.loaderIsVisible()}`}>
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div>
        )
    }
});

export default Loader;
