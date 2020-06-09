import { combineReducers } from 'redux';

// reducer files
import TvSeries from 'redux/reducers/TvSeries';
import Search from 'redux/reducers/Search';
import Movies from 'redux/reducers/Movies';

const appReducer = combineReducers({
    TvSeries,
    Search,
    Movies
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
