import React, { Component } from 'react';
import RatingCard from 'views/components/RatingCard';
// import Icon from 'utils/Icon';
// import { Progress } from 'antd';

class MySeries extends Component {
    render() {
        return (
            <div>
                <div className="parent-row parent-wrap parent-v-center">
                    <RatingCard 
                        {...this.props}
                        seasonName={'Season 1'}
                        rating={7.9}
                    />
                </div>
            </div>
        );
    }
}

export default MySeries;