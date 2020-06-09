import React, { Component } from 'react';
import MoviePoster from 'views/components/MoviePoster';
import {connect} from 'react-redux';
import {getMoviesDetails} from 'redux/actions/Movies';
import {getPopularTvSeriesInfo,getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';

class Home extends Component {

    componentDidMount = () => {
        this.props.getMoviesDetails();
        this.props.getPopularTvSeriesInfo();
        this.props.getDefaultTvSeriesInfo();
    }

    render() {
        return (
            <div className="parent-row parent-wrap">
                {this.props.default_tv_series.length && this.props.default_tv_series.map((value,index)=>
                    <div className="mb-20 mr-20 movie-card" key={index}>
                        <MoviePoster 
                            poster={value.Poster}
                            title={value.Title}
                            imdbRating={value.imdbRating}
                        />
                    </div>
                )}
                {this.props.popular_tv_series.length && this.props.popular_tv_series.map((value,index)=>
                    <div className="mb-20 mr-20 movie-card" key={index}>
                        <MoviePoster 
                            poster={value.Poster}
                            title={value.Title}
                            imdbRating={value.imdbRating}
                        />
                    </div>
                )}
                {this.props.movies_data.length && this.props.movies_data.map((value,index)=>
                    <div className="mb-20 mr-20 movie-card" key={index}>
                        <MoviePoster 
                            poster={value.Poster}
                            title={value.Title}
                            imdbRating={value.imdbRating}
                        />
                    </div>
                )}
            </div>
        );
    }
}

// export default Home;
function mapStateToProps(state){
    return{
        movies_data:state.Movies.movies_data,
        popular_tv_series:state.TvSeries.popular_tv_series,
        default_tv_series:state.TvSeries.default_tv_series
    }
}

export default connect(mapStateToProps,{
    getMoviesDetails,
    getPopularTvSeriesInfo,
    getDefaultTvSeriesInfo
})(Home);