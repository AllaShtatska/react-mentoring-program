import {connect} from 'react-redux';

import {setSelectedMovie} from '../actions/setSelectedMovie';
import {moviesOfTheSameGenreFetchRequested} from '../actions/moviesOfTheSameGenreFetchRequested';

import MoviePage from '../components/MoviePage';

const mapStateToProps = (state) => ({
    selectedMovie:state.movieDetails.selectedMovie,
    moviesOfTheSameGenre:state.movieDetails.moviesOfTheSameGenre
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectMovie: movie => 
    {
        dispatch(setSelectedMovie(movie));
        if (movie !== null)
        {
            dispatch(moviesOfTheSameGenreFetchRequested(movie.genres));
        }
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(MoviePage);
