import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkReduxSetup} from 'redux/actions/TvSeries';
import {Routes} from 'config/Routes';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MySeries from 'views/TvSeries/MySeries';
import Popular from 'views/TvSeries/Popular';

class TvSeries extends Component {

    componentDidMount = () =>{
        this.props.checkReduxSetup()
    }

    render() {
        return (
            <div>
                <div className="parent-row parent-v-center mb-25 tab-style-container">
                    <NavLink exact activeClassName="active-tab" to={Routes.MySeries} className="inactive-tab">
                        My Series
                    </NavLink>
                    <NavLink exact activeClassName="active-tab" to={Routes.Popular} className="inactive-tab">
                        Popular
                    </NavLink>
                </div>
                <div>
                    <Switch>
                        <Route exact  {...this.props} path={Routes.MySeries} component={MySeries} />
                        <Route  {...this.props} path={Routes.Popular} component={Popular} />
                    </Switch>
                </div>
            </div>
        );
    }
}

// export default TvSeries;
function mapStateToProps(state) {
    return {
    };
}

export default connect(
    mapStateToProps,
    {checkReduxSetup}
)(TvSeries);