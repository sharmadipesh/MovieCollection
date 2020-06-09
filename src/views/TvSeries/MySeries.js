import React, { Component } from 'react';
import RatingCard from 'views/components/RatingCard';
import {getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';
import {connect} from 'react-redux';
import idx from 'idx';
import MovieDetailsPoster from 'views/components/MovieDetailsPoster';
import MoviePoster from 'views/components/MoviePoster';

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
                                <MoviePoster 
                                    poster={value.Poster}
                                    title={value.Title}
                                    imdbRating={value.imdbRating}
                                />
                                :
                                <MovieDetailsPoster 
                                    title={value.Title}
                                    totalSeasons={value.totalSeasons}
                                    imdbVotes={value.imdbVotes}
                                    imdbRating={value.imdbRating}
                                    poster={value.Poster}
                                />
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