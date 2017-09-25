// actions
const TOGGLE_LOADING = 'TOGGLE_LOADING';

// action creator
export function toggleLoading() {
	return {type: TOGGLE_LOADING};
}

function loadingReducer(state = false, action) {
	switch (action.type) {
		case TOGGLE_LOADING: {
			return !state;
		}
		default: {
			return state;
		}
	}
}

export default loadingReducer;