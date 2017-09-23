import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

function Criteria(props) {
	return (
		<div>
			<form>
				<label>Travel time (minutes)</label>
				<input type="number" name="time_min" value={props.criterion.time_min} disabled />

				<label>Mode of transportation</label>
				<select name="mode" value={props.criterion.mode} disabled >
					<option value="drive">driving</option>
					<option value="bike">biking</option>
					<option value="walk">walking</option>
				</select>
				
				<label>Amenity</label>
				<input type="text" name="text" value={props.criterion.text} disabled />
			</form>
		</div>
	);
}	

const mapStateToProps = null;

const mapDispatchToProps = function(dispatch) {
	return {

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Criteria);