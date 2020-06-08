import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Routes} from 'config/Routes';
import Home from 'views/Home';
import TvSeries from 'views/TvSeries';
import Movies from 'views/Movies';
import SidebarContainer from 'utils/SidebarContainer';
import Header from 'utils/Header';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <SidebarContainer {...this.props}/>
                <div className="main-app-container">
                    <Header {...this.props}/>
                    <Switch>
                        <Route exact  {...this.props} path={Routes.Home} component={Home} />
                        <Route   {...this.props} path={Routes.TvSeries} component={TvSeries} />
                        <Route exact  {...this.props} path={Routes.Movies} component={Movies} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainLayout;