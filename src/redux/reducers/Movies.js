import { GET_MOVIES_DATA } from 'redux/Types';

const initial_state = {
	movies_data:{}
};

export default (state = initial_state, action) => {
	switch (action.type) {
		case GET_MOVIES_DATA:
			return {
				...state,
				movies_data: action.payload,
			};
		default:
			return state;
	}
};
