import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { queryAPI } from '../reducer/places';

class SearchField extends React.Component {

	constructor(props) {
		super(props);

		// hold data needed for external queries on local state
		this.state = {
			time_min: "",
			mode: "",
			text: ""
		};

		// bind necessary event handlers
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// update relevant field
		// element names must correspond with keys on state
		const field = event.target.name;
		const value = event.target.value;
		this.setState({[field]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.sendAPIQuery(this.state);
	}

	render() {

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Travel time (minutes)</label>
					<input type="number" name="time_min" value={this.state.value} onChange={this.handleChange} />

					<label>Mode of transportation</label>
					<select name="mode" onChange={this.handleChange}>
						<option value="drive">driving</option>
						<option value="bike">biking</option>
						<option value="walk">walking</option>
					</select>
					
					<label>Amenity</label>
					<input type="text" name="text" value={this.state.value} onChange={this.handleChange} />
					
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

const mapStateToProps = null;

const mapDispatchToProps = function(dispatch) {
	return {
		sendAPIQuery: function(query) {
			dispatch(queryAPI(query));
		}
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);