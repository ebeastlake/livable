import axios from 'axios';
import queryString from 'query-string';

// actions
const SET_LOCATION = 'SET_LOCATION';

// action creator
export function setLocation(location) {
	return {type: SET_LOCATION, location: location};
}
;// thunk creator
export function getLatLng(locName) {
	console.log('in lat lng');
	return function thunk(dispatch) {
		console.log('in thunk')
		const string = queryString.stringify(locName);
		console.log('query', string);
		return axios.get(`/api/location/${string}`)
		.then(res => res.data)
		.then(location => {
			dispatch(setLocation(location));
		});
	}
}

function locationReducer(state = {}, action) {
	switch (action.type) {
		case SET_LOCATION: {
			return action.location;
		}
		default: {
			return state;
		}
	}
}

export default locationReducer;