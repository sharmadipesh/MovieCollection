import React, { Component } from 'react';

class MoviePoster extends Component {
    render() {
        return (
            <>
                <img alt="movie-poster" src={this.props.poster} className="movie-poster mb-7"/>
                <div className="movie-name">{this.props.title}</div>
                <div className="movie-rating">iMDB Rating: {this.props.imdbRating}/10</div>
            </>
        );
    }
}

export default MoviePoster;