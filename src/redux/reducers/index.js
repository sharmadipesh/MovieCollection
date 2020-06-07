import { combineReducers } from 'redux';

// reducer files
import TvSeries from 'redux/reducers/TvSeries';

const appReducer = combineReducers({
    TvSeries
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
