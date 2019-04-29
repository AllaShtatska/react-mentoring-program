import {MOVIES_OF_THE_SAME_GENRE_FETCH_REQUESTED} from './actionTypes'

export const moviesOfTheSameGenreFetchRequested = (genres) => ({
    type: MOVIES_OF_THE_SAME_GENRE_FETCH_REQUESTED,
    genres
});