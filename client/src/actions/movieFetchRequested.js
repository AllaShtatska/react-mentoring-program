import {MOVIE_FETCH_REQUESTED} from './actionTypes'

export const movieFetchRequested = (filmId) => ({
    type: MOVIE_FETCH_REQUESTED,
    payload:{
        filmId: filmId
    }
});