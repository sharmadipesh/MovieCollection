import React, { Component } from 'react';
import MoviePoster from 'views/components/MoviePoster';
import {connect} from 'react-redux';
import {getMoviesDetails} from 'redux/actions/Movies';
import {getPopularTvSeriesInfo,getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';
import {sortingOperationHandler} from 'views/components/Sorting';
import { Select } from 'antd';
const { Option } = Select;

class Home extends Component {
    state={
        homeData:[]
    }

    handleChange =async expression => {
        let data = await sortingOperationHandler(expression,[...this.state.homeData]);
        
        this.setState({
            homeData:data
        })
    }

    componentDidMount = async() => {
        await  this.props.getMoviesDetails();
        await  this.props.getPopularTvSeriesInfo();
        await  this.props.getDefaultTvSeriesInfo();
        this.setState({
            homeData:[...this.props.default_tv_series,...this.props.popular_tv_series,...this.props.movies_data]
        })
    }

    render() {
        return (
            <div>
                <div className="mb-20 parent-row parent-h-space-between parent-v-center">
                    <div className="page-title">Home</div>
                    <div className="parent-row parent-v-center">
                        <div className=" mr-30 sort-by-text">Sort By: </div>
                        <Select defaultValue="1"  onChange={this.handleChange}>
                            <Option value="1">Alphabet (a-z)</Option>
                            <Option value="2">Alphabet (z-a)</Option>
                            <Option value="3">Rating (low to high)</Option>
                            <Option value="4">Rating (high to low)</Option>
                        </Select>
                    </div>
                </div>
                <div className="parent-row parent-wrap">
                    {this.state.homeData.length ? this.state.homeData.map((value,index)=>
                        <div className="mb-20 mr-20 movie-card" key={index}>
                            <MoviePoster 
                                poster={value.Poster}
                                title={value.Title}
                                imdbRating={value.imdbRating}
                            />
                        </div>
                    ):null}
                </div>
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