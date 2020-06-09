import React, { Component } from 'react';
import RatingCard from 'views/components/RatingCard';
import {getDefaultTvSeriesInfo} from 'redux/actions/TvSeries';
import {connect} from 'react-redux';
import idx from 'idx';

class MySeries extends Component {

    state = {
        activeCardDetails:{}
    }

    activeSeriesHandler = value => {
        this.setState({
            activeCardDetails:value
        })
    }

    componentDidMount = async() =>{
        await this.props.getDefaultTvSeriesInfo();
        this.activeSeriesHandler(idx(this.props.default_tv_series,_=>_[0]));
    }

    render() {
        console.log("ddaaa ",this.state.activeCardDetails.totalSeasons);
        return (
            <div>
                {/* <div className="mb-30">
                    <div className="active-card parent-row parent-h-space-between">
                        <div className="parent-col parent-h-space-between">
                            <div>
                                <div className="series-name">Game of Thrones</div>
                                <div>8 Seasons</div>
                                <div>73 Episodes</div>
                            </div>
                            <div>
                                <div>iMdB Rating: 9.5/10</div>
                                <div>Go to iMDB Page</div>
                            </div>
                        </div>
                        <img alt="poster" className="active-poster-image" src="img/narcos.jpg"/>
                    </div>
                </div> */}
                <div className="parent-row parent-wrap parent-v-center mb-30">
                    {this.props.default_tv_series.length && this.props.default_tv_series.map((value,index)=>
                        <div className="movie-card mr-20 clickable" key={index} onClick={()=>this.activeSeriesHandler(value)}>
                            <img alt="movie-poster" src={value.Poster} className="movie-poster mb-7"/>
                            <div className="movie-name">{value.Title}</div>
                            <div className="movie-rating">iMDB Rating: {value.imdbRating}/10</div>
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