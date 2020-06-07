import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkReduxSetup} from 'redux/actions/TvSeries';

class TvSeries extends Component {

    componentDidMount = () =>{
        this.props.checkReduxSetup()
    }

    render() {
        return (
            <div>
                Tv-Series Container
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