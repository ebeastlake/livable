// actions
const ADD_CRITERIA = 'ADD_CRITERIA';
const REMOVE_CRITERIA = 'REMOVE_CRITERIA';

// action creator
export function addCriteria(criteria, randColor) {
	criteria.color = randColor;
	return {type: ADD_CRITERIA, criteria: criteria};
}

export function removeCriteria(criteria) {
	return {type: REMOVE_CRITERIA, criteria: criteria};
}


function criteriaReducer(state = [], action) {
	switch (action.type) {
		case ADD_CRITERIA: {
			return [...state, action.criteria];
		}
		case REMOVE_CRITERIA: {
			return state;
		}
		default: {
			return state;
		}

	}
}

export default criteriaReducer;