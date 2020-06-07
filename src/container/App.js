import React,{Component} from 'react';
import 'styles/index.scss';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'redux/reducers'

import {Routes} from 'config/Routes';
import MainLayout from 'container/MainLayout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from 'utils/ScrollToTop';

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk,
    logger,
    // axiosAuthMiddleware
)(createStore);

const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


class App extends Component{
    render(){
        return(
            <div>
                <Provider store={store}>
                    <Router>
                        <ScrollToTop>
                            <Route path={Routes.Home} component={MainLayout} />                
                        </ScrollToTop>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default App;
