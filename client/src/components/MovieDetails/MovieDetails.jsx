import React from 'react';
import MovieCover from './MovieCover';
import MovieTitle from './MovieTitle'
import MovieRating from './MovieRating';
import MovieGenre from "./MovieGenre";
import MovieReleaseDate from './MovieReleaseDate'
import MovieRuntime from './MovieRuntime'
import MovieDescription from './MovieDescription'

class MovieDetails extends React.Component {
    render(){
        return(
            <div>
                <MovieCover movie={this.props.selectedMovie}/>
                <div className="inline">
                    <MovieTitle movie={this.props.selectedMovie}/>
                    <MovieRating movie={this.props.selectedMovie}/>
                    <MovieGenre movie={this.props.selectedMovie}/>
                    <MovieReleaseDate movie = {this.props.selectedMovie}/>
                    <MovieRuntime movie = {this.props.selectedMovie}/>
                    <MovieDescription movie={this.props.selectedMovie}/>
                </div>
            </div>
        );
    }
}

export default MovieDetails;