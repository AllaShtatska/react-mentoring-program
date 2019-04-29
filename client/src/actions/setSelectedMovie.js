import {SET_SELECTED_MOVIE} from './actionTypes';

export const setSelectedMovie = (movie) => ({
    type: SET_SELECTED_MOVIE,
    movie
});