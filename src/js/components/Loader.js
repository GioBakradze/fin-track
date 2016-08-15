import React from 'react'
import store from './../store'
import { connect } from 'react-redux'

@connect((store) => ({ loading: store.loading}))
export default class Loader extends React.Component {

    constructor() {
        super();
        this.loaderIsVisible = this.loaderIsVisible.bind(this);
    }

    loaderIsVisible() {
        return this.props.loading > 0 ? 'loader--visible' : '';
    }

    render() {
        return (
            <div class={`loader ${this.loaderIsVisible()}`}>
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div>
        )
    }
}
