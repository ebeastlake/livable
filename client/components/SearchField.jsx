import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { queryAPI } from '../reducer/places';
import { addCriteria } from '../reducer/criteria';
import { toggleLoading } from '../reducer/loading';

class SearchField extends React.Component {

	constructor(props) {
		super(props);

		// hold data needed for external queries on local state
		this.state = {
			time_min: "",
			mode: "",
			text: "",
			location: this.props.location
		};

		// bind necessary event handlers
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		console.log('search field received a new location!')
		console.log(nextProps.location)
		this.setState({location: nextProps.location});
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
		const query = {
			time_min: this.state.time_min,
			mode: this.state.mode,
			text: this.state.text,
			lat: this.state.location.lat,
			lng: this.state.location.lng
		};
		console.log('query in handleSubmit')
		console.log(query)
		// need to reset the state before query causes rerender
		this.setState({time_min: "", mode: "", text: ""});
		this.props.createQuery(query);
	}

	render() {

		return (
			<div>
				<form className="navbar-form">
					<div className="form-group">
					<div id="intro-line">
						I want to be...
					</div>
					<div>
						<input id="time_min" type="text" name="time_min" value={this.state.time_min} className="form-control" onChange={this.handleChange} />
						<label className="search-label">minutes</label>
						<select name="mode" onChange={this.handleChange}>
							<option value="drive">driving</option>
							<option value="bike">biking</option>
							<option value="walk">walking</option>
						</select>
						<label className="search-label"> from a </label>
						<input id="text" type="text" name="text" value={this.state.text} className="form-control" onChange={this.handleChange} />
					</div>
					<div>
						<button id="search-btn" type="button" className="btn btn-success pull-right" onClick={this.handleSubmit}><i className="fa fa-search" aria-hidden="true"></i></button>
					</div>
					</div>
				</form>
			</div>
		)
	}
}

function getRandColor() {
	return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
};

const mapStateToProps = function(state) {
	return {
		location: state.location
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		createQuery: function(query) {
			const randColor = getRandColor();
			// sending randColor as a second arg so it doesn't get added to searchQuery
			dispatch(addCriteria(query, randColor));
			dispatch(toggleLoading());
			dispatch(queryAPI(query, randColor));
		}
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);