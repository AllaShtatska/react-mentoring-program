import React from 'react';
import MovieDetails from './MovieDetails'
import MoviesList from './MoviesList';

class MoviePage extends React.Component {
    render(){
        return(
            <div>
                <MovieDetails selectedMovie={this.props.selectedMovie}/>
                <div>Films by {this.props.selectedMovie.genre[0]} genre</div>
                <MoviesList list={this.props.moviesOfTheSameGenre} onSelectMovie={this.props.onSelectMovie}/>
            </div>
        );
    }
}

export default MoviePage;