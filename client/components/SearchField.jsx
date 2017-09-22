import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { queryAPI } from '../reducer/places';

class SearchField extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			time: "",
			mode: "",
			amenity: ""
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const field = event.target.name;
		const value = event.target.value;
		console.log(field)
		console.log(value)
		this.setState({[field]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const query = this.state.amenity.replace(" ", "+");
		this.props.sendAPIQuery(query);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Travel time (minutes)</label>
					<input type="number" name="time" value={this.state.value} onChange={this.handleChange} />
					<label>Mode of transportation</label>
					<select name="mode" onChange={this.handleChange}>
						<option value="driving">driving</option>
						<option value="biking">biking</option>
						<option value="walking">walking</option>
					</select>
					<label>Amenity</label>
					<input type="text" name="amenity" value={this.state.value} onChange={this.handleChange} />
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
			console.log('dispatching query ' + query)
			dispatch(queryAPI(query));
		}
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);