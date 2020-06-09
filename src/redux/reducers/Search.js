import { SEARCH_DATA } from 'redux/Types';

const initial_state = {
	search_data:{}
};

export default (state = initial_state, action) => {
	switch (action.type) {
		case SEARCH_DATA:
			return {
				...state,
				search_data: action.payload,
			};
		default:
			return state;
	}
};
