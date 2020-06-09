import React, { Component } from 'react';
import RatingCard from 'views/components/RatingCard';
import {getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';
import {connect} from 'react-redux';
import idx from 'idx';

class MySeries extends Component {

    state = {
        activeCardIndex:0,
        activeCardDetails:{}
    }

    activeSeriesHandler = (value,index) => {
        this.setState({
            activeCardDetails:value,
            activeCardIndex:index
        })
    }

    componentDidMount = async() =>{
        await this.props.getDefaultTvSeriesInfo();
        this.activeSeriesHandler(idx(this.props.default_tv_series,_=>_[0]),0);
    }

    render() {
        return (
            <div>
                <div className="parent-row parent-wrap parent-v-center mb-50">
                    {this.props.default_tv_series.length && this.props.default_tv_series.map((value,index)=>
                        <div 
                            className={this.state.activeCardIndex === index ? 'active-card mr-20 ' : 'movie-card mr-20 clickable'}
                            key={index} 
                            onClick={()=>this.activeSeriesHandler(value,index)}
                            >
                            {this.state.activeCardIndex !== index ?
                                <div>
                                    <img alt="movie-poster" src={value.Poster} className="movie-poster mb-7"/>
                                    <div className="movie-name">{value.Title}</div>
                                    <div className="movie-rating">iMDB Rating: {value.imdbRating}/10</div>
                                </div>
                                :
                                <div className="parent-row parent-h-space-between">
                                    <div className="parent-col parent-h-space-between">
                                        <div>
                                            <div className="series-name">{value.Title}</div>
                                            <div>{value.totalSeasons} Seasons</div>
                                            <div>{value.imdbVotes} iMDB Votes</div>
                                        </div>
                                        <div>
                                            <div>iMdB Rating: {value.imdbRating}/10</div>
                                            <div>Go to iMDB Page</div>
                                        </div>
                                    </div>
                                    <img alt="poster" className="active-poster-image" src={value.Poster}/>
                                </div>
                            }
                        </div>
                    )}
                </div>
                <div className="parent-row parent-wrap parent-v-center">
                    {Object.keys(this.state.activeCardDetails).length && 
                        Array.from(Array(Number(this.state.activeCardDetails.totalSeasons)), (e, i) => {
                        return <RatingCard 
                            {...this.props}
                            seasonName={`Season ${i+1}`}
                            rating={idx(this.state.activeCardDetails,_=>_.imdbRating)}
                        />
                    })}
                </div>
            </div>
        );
    }
}

// export default MySeries;
function mapStateToProps(state){
    return{
        default_tv_series:state.TvSeries.default_tv_series
    }
}

export default connect(mapStateToProps,{
    getDefaultTvSeriesInfo
})(MySeries);