import React, { Component } from 'react';
import {getPopularTvSeriesInfo} from 'redux/actions/TvSeries';
import {connect} from 'react-redux';
import idx from 'idx';
import MovieDetailsPoster from 'views/components/MovieDetailsPoster';
import MoviePoster from 'views/components/MoviePoster';
import RatingCard from 'views/components/RatingCard';
import { Select } from 'antd';
import {sortingOperationHandler} from 'views/components/Sorting';
const { Option } = Select;

class Popular extends Component {
    state = {
        activeCardIndex:0,
        activeCardDetails:{},
        myPopularData:[]
    }

    activeSeriesHandler = (value,index) => {
        this.setState({
            activeCardDetails:value,
            activeCardIndex:index
        })
    }

    handleChange =async expression => {
        let data = await sortingOperationHandler(expression,[...this.state.myPopularData]);
        await  this.setState({
            myPopularData:data
        })
        this.activeSeriesHandler(idx(this.state.myPopularData,_=>_[0]),0);
    }

    componentDidMount = async() =>{
        await this.props.getPopularTvSeriesInfo();
        this.setState({
            myPopularData:this.props.popular_tv_series
        })
        this.activeSeriesHandler(idx(this.state.myPopularData,_=>_[0]),0);
    }

    render() {
        return (
            <div>
                <div className="drop-container">
                    <div className="parent-row parent-v-center sorting-container">
                        <div className=" mr-30 sort-by-text">Sort By: </div>
                        <Select defaultValue="1"  onChange={this.handleChange}>
                            <Option value="1">Alphabet (a-z)</Option>
                            <Option value="2">Alphabet (z-a)</Option>
                            <Option value="3">Rating (low to high)</Option>
                            <Option value="4">Rating (high to low)</Option>
                        </Select>
                    </div>
                </div>
                <div className="parent-row parent-wrap parent-v-center mb-30">
                    {this.state.myPopularData.length && this.state.myPopularData.map((value,index)=>
                        <div 
                            className={this.state.activeCardIndex === index ? 'active-card mr-20 mb-20' : 'movie-card mr-20 mb-20 clickable'}
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

// export default Popular;
function mapStateToProps(state){
    return{
        popular_tv_series:state.TvSeries.popular_tv_series
    }
}

export default connect(mapStateToProps,{
    getPopularTvSeriesInfo
})(Popular);