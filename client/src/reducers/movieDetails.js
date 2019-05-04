import {SET_SELECTED_MOVIE, MOVIES_OF_THE_SAME_GENRE_FETCH_SUCCEEDED} from '../actions/actionTypes';

const initialState = {
    selectedMovie: null,
    moviesOfTheSameGenre: []
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
    }
    return state;
};

export default movieDetails;