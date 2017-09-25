import axios from 'axios';
import queryString from 'query-string';
import { toggleLoading } from './loading';

// actions
const FIND_PLACES = 'FIND_PLACES';
const DELETE_PLACE = 'DELETE_PLACE';

// action creator
export function findPlaces(places) {
	return {type: FIND_PLACES, places: places};
}

export const deletePlace = function(location) {
	return {type: DELETE_PLACE, location: location};
}

// thunk creator
export function queryAPI(query, randColor) {
	return function thunk(dispatch) {
		console.log('query in reducer')
		console.log(query)
		const string = queryString.stringify(query);
		return axios.get(`/api/places/${string}`)
		.then(res => res.data)
		.then(places => {
			const colorPlaces = places.map(place => {
				place.color = randColor;
				return place; 
			})
			dispatch(findPlaces(colorPlaces));
			dispatch(toggleLoading());
		})
	};
}

function placesReducer(state = [], action) {
	switch (action.type) {
		case FIND_PLACES: {
			console.log('state right here')
			console.log(state);
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