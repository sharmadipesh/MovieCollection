import React, { Component } from 'react';
import {getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';
import {connect} from 'react-redux';
import idx from 'idx';
import MovieDetailsPoster from 'views/components/MovieDetailsPoster';
import MoviePoster from 'views/components/MoviePoster';
import RatingCard from 'views/components/RatingCard';
import { Select } from 'antd';
import {sortingOperationHandler} from 'views/components/Sorting';
const { Option } = Select;


class MySeries extends Component {

    state = {
        activeCardIndex:0,
        activeCardDetails:{},
        mySeriesData:[]
    }

    handleChange =async expression => {
        let data = await sortingOperationHandler(expression,[...this.state.mySeriesData]);
        await  this.setState({
            mySeriesData:data
        })
        this.activeSeriesHandler(idx(this.state.mySeriesData,_=>_[0]),0);
    }

    activeSeriesHandler = (value,index) => {
        this.setState({
            activeCardDetails:value,
            activeCardIndex:index
        })
    }

    componentDidMount = async() =>{
        await this.props.getDefaultTvSeriesInfo();
        this.setState({
            mySeriesData:this.props.default_tv_series
        })
        this.activeSeriesHandler(idx(this.state.mySeriesData,_=>_[0]),0);
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
                <div className="parent-row parent-wrap parent-v-center mb-60">
                    {this.state.mySeriesData.length ? this.state.mySeriesData.map((value,index)=>
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
                    ):null}
                </div>
                <div className="parent-row parent-wrap parent-v-center">
                    {Object.keys(this.state.activeCardDetails).length ?
                        Array.from(Array(Number(this.state.activeCardDetails.totalSeasons)), (e, i) => {
                        return <RatingCard 
                            {...this.props}
                            seasonName={`Season ${i+1}`}
                            rating={idx(this.state.activeCardDetails,_=>_.imdbRating)}
                        />
                    }):null}
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