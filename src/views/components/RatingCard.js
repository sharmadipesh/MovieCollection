import React, { Component } from 'react';
import Icon from 'utils/Icon';
import { Progress } from 'antd';

class RatingCard extends Component {
    render() {
        return (
            <>
                <div className="rating-card p-10">
                        <div className="parent-row parent-h-space-between parent-v-center">
                            <div className="font-size-16">{this.props.seasonName}</div>
                            <Icon icon="ICON_IMDB" className="icon-imdb"/>
                        </div>
                        <div className="font-size-13 mb-5">Rating:</div>
                        <div className="parent-row parent-h-center">
                            <Progress 
                                type="circle" 
                                percent={this.props.rating} 
                                width={85} 
                                showInfo={false} 
                                strokeColor={'#fcbc02'}
                                strokeWidth={7}
                            />
                        </div>
                    </div>   
            </>
        );
    }
}

export default RatingCard;