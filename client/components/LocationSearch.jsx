import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getLatLng } from '../reducer/location';

class LocationSearch extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			location: ""
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// update relevant field
		// element names must correspond with keys on state
		const field = event.target.name;
		const value = event.target.value;
		console.log(value);
		this.setState({[field]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('handlingSubmit!')
		const location = this.state;
		// need to reset the state before query causes rerender
		this.setState({location: ""});
		this.props.findLocation(location);
	}

	render() {
		return (
	        <div>
				<form className="navbar-form">
	        		Where would you like to begin your search?
	        		<input id="location" type="text" name="location" value={this.state.location} className="form-control" onChange={this.handleChange}/>
	        		<button id="loc-search-btn" type="button" className="btn btn-success pull-right" onClick={this.handleSubmit}><i className="fa fa-search" aria-hidden="true"></i></button>
	        	</form>
	        </div>
		);
	}	
}

const mapStateToProps = null;

const mapDispatchToProps = function(dispatch) {
	return {
		findLocation: function(location) {
			console.log('in find location')
			dispatch(getLatLng(location));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);