import axios from 'axios';

// actions
const FIND_PLACES = 'FIND_PLACES';

// action creator
export function findPlaces() {
	return {type: FIND_PLACES, places: places};
}

// thunk creator
export function queryAPI(query) {
	return function thunk(dispatch) {
		return axios.get(`/api/places/${query}`);
	};
}

function placesReducer(state = [], action) {
	switch (action.type) {
		case FIND_PLACES: {
			return state;
		}
		default: {
			return state;
		}
	}
}

export default placesReducer;