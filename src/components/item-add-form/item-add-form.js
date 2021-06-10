import React from 'react'
import './item-add-form.css'

export default class ItemAddForm extends React.Component{

	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
	};

    render(){
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
            <input type="text"
             className="form-control"
             onChange={this.onLabelChange}
             placeholder="What needs to be done"/>
        <button type="submit"
                className="btn btn-outline-secondary">
            <i className="fa fa-plus"/> Add item</button>
            </form>);
    }

}