import { combineReducers } from 'redux';

// reducer files
import TvSeries from 'redux/reducers/TvSeries';
import Search from 'redux/reducers/Search';

const appReducer = combineReducers({
    TvSeries,
    Search
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
