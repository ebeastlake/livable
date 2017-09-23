import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { queryAPI } from '../reducer/places';
import { addCriteria } from '../reducer/criteria';

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
		console.log(value)
		this.setState({[field]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const query = this.state;
		// need to reset the state before query causes rerender
		this.setState({time_min: "", mode: "", text: ""});
		this.props.createQuery(query);
	}

	render() {

		return (
			<div>
				<form className="navbar-form navbar-right" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label className="search-label">I want to be...</label>
						<input id="time_min" type="text" name="time_min" value={this.state.time_min} className="form-control" onChange={this.handleChange} />
						<label className="search-label">minutes</label>
						<select name="mode" onChange={this.handleChange}>
							<option value="drive">driving</option>
							<option value="bike">biking</option>
							<option value="walk">walking</option>
						</select>
						<label className="search-label"> from a </label>
						<input type="text" name="text" value={this.state.text} className="form-control" onChange={this.handleChange} />
						<input type="submit" className="btn btn-info" value="Search" />
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = null;

const mapDispatchToProps = function(dispatch) {
	return {
		createQuery: function(query) {
			dispatch(addCriteria(query));
			// commented out for UI testing
			dispatch(queryAPI(query));
		}
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);