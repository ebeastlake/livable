import axios from 'axios';
import queryString from 'query-string';

// actions
const FIND_PLACES = 'FIND_PLACES';
const DELETE_PLACE = 'DELETE_PLACE';

// action creator
export function findPlaces(places) {
	return {type: FIND_PLACES, places: places};
}

export const deletePlace = function(location) {
	console.log('i am in delete place');
	return {type: DELETE_PLACE, location: location};
}

// thunk creator
export function queryAPI(query) {
	return function thunk(dispatch) {
		const string = queryString.stringify(query);
		return axios.get(`/api/places/${string}`)
		.then(res => res.data)
		.then(places => {
			dispatch(findPlaces(places));
		})
	};
}

function placesReducer(state = [], action) {
	console.log('action')
	console.log(action)
	console.log('type')
	console.log(action.type)
	switch (action.type) {
		case FIND_PLACES: {
			return state.concat(action.places);
		}
		case DELETE_PLACE: {
			return state.filter(entry => {
				console.log('entry')
				console.log(entry)
				return ((entry.location.lat !== action.location.lat) || (entry.location.lng !== action.location.lng));
			});
		}
		default: {
			return state;
		}
	}
}

export default placesReducer;