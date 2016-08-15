import React from "react"

export default class AddCategory extends React.Component {

    constructor() {
        super();
        this.add = this.add.bind(this);
        this.hasError = this.hasError.bind(this);

        this.state = {
            inputIsInvalid: true
        };
    }

    hasError() {
        return this.state.inputIsInvalid ? '' : 'has-error';
    }

    add(e) {
        e.preventDefault();

        if (this.refs.name.value.length === 0) {
            this.setState({
                inputIsInvalid: false
            });
        } else {
            console.log(this.refs.name.value);
            this.props.addCategory(this.refs.name.value);
            this.setState({
                inputIsInvalid: true
            });
            this.refs.name.value = '';
        }
    }

    render () {
        return (
            <div class="add-category">
                <div class={`form-group ${this.hasError()}`}>
                    <form ref="addCategoryForm" onSubmit={this.add}>
                        <div class="input-group">
                            <input type="text" ref="name" placeholder={`Add new category`} class={`form-control`} />
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="button">Ok</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
