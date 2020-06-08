import { REDUX_SETUP, DEFAULT_TV_SERIES } from 'redux/Types';

const initial_state = {
	redux_setup: false,
	default_tv_series:{}
};

export default (state = initial_state, action) => {
	switch (action.type) {
		case REDUX_SETUP:
			return {
				...state,
				redux_setup: action,
			};
		case DEFAULT_TV_SERIES:
			return {
				...state,
				default_tv_series: action.payload,
			};
		default:
			return state;
	}
};
