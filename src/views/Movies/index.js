import React, { Component } from 'react';
import MoviePoster from 'views/components/MoviePoster';
import {connect} from 'react-redux';
import {getMoviesDetails} from 'redux/actions/Movies';


class Movies extends Component {

    componentDidMount = () => {
        this.props.getMoviesDetails();
    }

    render() {
        return (
            <div className="parent-row parent-wrap">
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

// export default Movies;
function mapStateToProps(state){
    return{
        movies_data:state.Movies.movies_data
    }
}

export default connect(mapStateToProps,{
    getMoviesDetails
})(Movies);