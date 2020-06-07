import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Routes} from 'config/Routes';
import Home from 'views/Home';
import TvSeries from 'views/TvSeries';
import Movies from 'views/Movies';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact  {...this.props} path={Routes.Home} component={Home} />
                    <Route exact  {...this.props} path={Routes.TvSeries} component={TvSeries} />
                    <Route exact  {...this.props} path={Routes.Movies} component={Movies} />
                </Switch>
            </div>
        );
    }
}

export default MainLayout;