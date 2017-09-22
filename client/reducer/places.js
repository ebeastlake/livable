import axios from 'axios';

// actions
const FIND_PLACES = 'FIND_PLACES';

// action creator
export function findPlaces(places) {
	return {type: FIND_PLACES, places: places};
}

// thunk creator
export function queryAPI(query) {
	return function thunk(dispatch) {
		console.log('in thunk')
		return axios.get(`/api/places/${query}`)
		.then(res => res.data)
		.then(places => {
			dispatch(findPlaces(places));
		})
	};
}

function placesReducer(state = [], action) {
	switch (action.type) {
		case FIND_PLACES: {
			return state.concat(action.places);
		}
		default: {
			return state;
		}
	}
}

export default placesReducer;