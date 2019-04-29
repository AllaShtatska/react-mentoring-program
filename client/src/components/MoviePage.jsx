import React from 'react';
import BackToSearch from './BackToSearch'
import MovieDetails from './MovieDetails'
import MoviesList from './MoviesList';

class MoviePage extends React.Component {
    render(){
        return(
            <div>
                <BackToSearch onSelectMovie={this.props.selectMovie} />
                <div>
                    <MovieDetails selectedMovie={this.props.selectedMovie} />
                    <div>Films by {this.props.selectedMovie.genres} genre</div>
                    <MoviesList list={this.props.moviesOfTheSameGenre} onSelectMovie={this.props.selectMovie} />
                </div>
            </div>
        );
    }
}

export default MoviePage;