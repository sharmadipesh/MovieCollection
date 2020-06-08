import React, { Component } from 'react';
import RatingCard from 'views/components/RatingCard';
import {getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';
import {connect} from 'react-redux';


class MySeries extends Component {

    componentDidMount = () =>{
        this.props.getDefaultTvSeriesInfo();
    }

    render() {
        console.log("ddaaa ",this.props.default_tv_series);
        return (
            <div>
                <div className="parent-row parent-wrap parent-v-center mb-30">
                    {/* <div className="movie-card">
                        <img alt="movie-poster" src="img/narcos.jpg" className="movie-poster mb-7"/>
                        <div className="movie-name">
                            Narcos
                        </div>
                        <div className="movie-rating">iMDB Rating: 8.6/10</div>
                    </div> */}
                    {this.props.default_tv_series.length && this.props.default_tv_series.map((value,index)=>
                        <div className="movie-card mr-20" key={index}>
                            <img alt="movie-poster" src={value.Poster} className="movie-poster mb-7"/>
                            <div className="movie-name">{value.Title}</div>
                            <div className="movie-rating">iMDB Rating: {value.imdbRating}/10</div>
                        </div>
                    )}
                </div>
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

// export default MySeries;
function mapStateToProps(state){
    return{
        default_tv_series:state.TvSeries.default_tv_series
    }
}

export default connect(mapStateToProps,{
    getDefaultTvSeriesInfo
})(MySeries);