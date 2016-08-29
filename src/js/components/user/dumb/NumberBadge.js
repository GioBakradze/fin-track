import React from 'react'
import _ from 'lodash'

export default class NumberBadge extends React.Component {

    constructor(props) {
        super(props);
        this.valueChanged = this.valueChanged.bind(this);
        this.updateValue = _.debounce(this.updateValue.bind(this), 1000);

        this.state = {
            value: this.props.value
        };
    }

    valueChanged(event) {
        this.setState({
            value: Number(event.target.value) < 0 ? 0 : event.target.value 
        });
        this.updateValue();
    }

    updateValue() {
        console.log(this.state.value);
    }

    render() {

        return (
            <div class="number-badge">
                <div class="input-group">
                    <input type="number" class="form-control" onChange={this.valueChanged} value={this.state.value} />
                </div>
            </div>
        )
    }
}
