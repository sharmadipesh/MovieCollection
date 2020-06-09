import React, { Component } from 'react';

class MovieDetailsPoster extends Component {
    render() {
        return (
            <>
                <div className="parent-row parent-h-space-between">
                    <div className="parent-col parent-h-space-between">
                        <div>
                            <div className="series-name">{this.props.title}</div>
                            {this.props.totalSeasons ?
                                <div>{this.props.totalSeasons} Seasons</div>:null
                            }
                            <div>{this.props.imdbVotes} iMDB Votes</div>
                        </div>
                        <div>
                            <div>iMdB Rating: {this.props.imdbRating}/10</div>
                            <div>Go to iMDB Page</div>
                        </div>
                    </div>
                    <img alt="poster" className="active-poster-image" src={this.props.poster}/>
                </div>
            </>
        );
    }
}

export default MovieDetailsPoster;