import React, { Component } from 'react';
import MoviePoster from 'views/components/MoviePoster';
import {connect} from 'react-redux';
import {getMoviesDetails} from 'redux/actions/Movies';
import { Select } from 'antd';
import {sortingOperationHandler} from 'views/components/Sorting';
const { Option } = Select;


class Movies extends Component {

    state={
        moviesData:[]
    }


    handleChange =async expression => {
        let data = await sortingOperationHandler(expression,[...this.state.moviesData]);
        this.setState({
            moviesData:data
        })
    }

    componentDidMount = async() => {
        await  this.props.getMoviesDetails();
        this.setState({
            moviesData:this.props.movies_data
        })
    }

    render() {

        return (
            <div>
                <div className="mb-20 parent-row parent-h-space-between parent-v-center">
                    <div className="page-title">Movies</div>
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
                    {this.state.moviesData.length ? this.state.moviesData.map((value,index)=>
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

// export default Movies;
function mapStateToProps(state){
    return{
        movies_data:state.Movies.movies_data
    }
}

export default connect(mapStateToProps,{
    getMoviesDetails
})(Movies);