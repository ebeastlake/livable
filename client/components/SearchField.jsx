import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { queryAPI } from '../reducer/places';

class SearchField extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: ""
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const query = this.state.value.replace(" ", "+");
		this.props.sendAPIQuery(query);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
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