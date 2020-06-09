import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkReduxSetup} from 'redux/actions/TvSeries';
import {Routes} from 'config/Routes';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MySeries from 'views/TvSeries/MySeries';
import Popular from 'views/TvSeries/Popular';
// import { Select } from 'antd';
// const { Option } = Select;

class TvSeries extends Component {

    // handleChange =value => {
    //     console.log(`selected ${value}`);
    // }

    componentDidMount = () =>{
        this.props.checkReduxSetup()
    }

    render() {
        return (
            <div>
                <div className="parent-row parent-v-center parent-h-space-between mb-25">
                    <div className="parent-row parent-v-center tab-style-container">
                        <NavLink exact activeClassName="active-tab" to={Routes.MySeries} className="inactive-tab">
                            My Series
                        </NavLink>
                        <NavLink exact activeClassName="active-tab" to={Routes.Popular} className="inactive-tab">
                            Popular
                        </NavLink>
                    </div>
                    {/* <div className="parent-row parent-v-center">
                        <div className=" mr-30 sort-by-text">Sort By: </div>
                        <Select defaultValue="Alphabet (a-z)"  onChange={this.handleChange}>
                            <Option value="Alphabet (a-z)">Alphabet (a-z)</Option>
                            <Option value="Alphabet (z-a)">Alphabet (z-a)</Option>
                            <Option value="Rating (low to high)">Rating (low to high)</Option>
                            <Option value="Rating (high to low)">Rating (high to low)</Option>
                        </Select>
                    </div> */}
                </div>
                <div>
                    <Switch>
                        <Route exact  {...this.props} path={Routes.MySeries} component={MySeries} />
                        <Route exact {...this.props} path={Routes.Popular} component={Popular} />
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