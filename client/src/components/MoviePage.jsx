import React from 'react';
import BackToSearch from './BackToSearch'
import MovieDetails from './MovieDetails'
import MoviesList from './MoviesList';

class MoviePage extends React.Component {
    onSelectMovie(selectedMovie){
        if (selectedMovie !== null){
            this.props.history.push('/film/'+selectedMovie.id);
        }
    }

    onBackToSearch(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <BackToSearch onSelectMovie={this.onBackToSearch.bind(this)} />
                {(this.props.selectedMovie !== null)&&
                <div>
                    <MovieDetails selectedMovie={this.props.selectedMovie} />
                    <div>Films by {this.props.selectedMovie.genres} genre</div>
                    <MoviesList list={this.props.moviesOfTheSameGenre} onSelectMovie={this.onSelectMovie.bind(this)} />
                </div>}
            </div>
        );
    }
}

export default MoviePage;