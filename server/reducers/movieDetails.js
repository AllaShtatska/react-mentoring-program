import { SET_SELECTED_MOVIE, MOVIES_OF_THE_SAME_GENRE_FETCH_SUCCEEDED, MOVIE_FETCH_SUCCEEDED, CLEAN_MOVIE_DETAILS, ERROR_HAPPENED } from '../actions/actionTypes';

const initialState = {
    selectedMovie: null,
    moviesOfTheSameGenre: [],
    hasError:false
};

const movieDetails = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.movie
            };
        case MOVIES_OF_THE_SAME_GENRE_FETCH_SUCCEEDED:
            return {
                ...state,
                moviesOfTheSameGenre: action.movies.data
            };
        case MOVIE_FETCH_SUCCEEDED:
            return {
                ...state,
                selectedMovie: action.payload.movie
            }
        case CLEAN_MOVIE_DETAILS:
            return {
                ...state,
                selectedMovie: null,
                moviesOfTheSameGenre: [],
                hasError:false
            }
        case ERROR_HAPPENED:
            return {
                ...state,
                hasError: true
            };
    }
    return state;
};

export default movieDetails;