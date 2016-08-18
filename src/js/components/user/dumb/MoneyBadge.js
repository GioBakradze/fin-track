// import React from 'react';
//
// const MoneyBadge = React.createClass({
//
//     getClassName() {
//         var amount = Number(this.props.amount);
//         var expected = Number(this.props.expected);
//
//         if (amount > expected)
//             return 'btn-danger';
//
//         if (amount === expected)
//             return 'btn-warning';
//
//         return 'btn-success';
//     },
//
//     switchToEditMode() {
//         var mode = !this.state.editMode;
//
//         this.setState({
//             editMode: mode
//         });
//     },
//
//     buttonClassName() {
//         return this.state.editMode ? 'hidden-xs hidden-sm hidden-md hidden-lg' : ''
//     },
//
//     editClassName() {
//         return this.state.editMode ? '' : 'hidden-xs hidden-sm hidden-md hidden-lg'
//     },
//
//     getInitialState() {
//         return {
//             editMode: false
//         }
//     },
//
//     render() {
//
//         return (
//             <div class="money-badge">
//                 <button class={`btn ${this.getClassName()} ${this.buttonClassName()}`} type="button" onClick={this.switchToEditMode}>
//                     {this.props.title} <span class="badge">{this.props.amount} / {this.props.expected}</span>
//                 </button>
//
//                 <div class={`money-badge__edit ${this.editClassName()}`}>
//                     <div class="input-group">
//                         <input type="number" placeholder={`${this.props.amount} / ${this.props.expected}`} class="form-control" />
//                         <span class="input-group-btn">
//                             <button class="btn btn-primary" type="button" onClick={this.switchToEditMode}>Ok</button>
//                         </span>
//                     </div>
//                 </div>
//
//             </div>
//         )
//     }
// });
//
// export default MoneyBadge;
