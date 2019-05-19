import {MOVIES_FETCH_REQUESTED} from './actionTypes'

export const moviesFetchRequested = (searchQuery) => ({
    type: MOVIES_FETCH_REQUESTED,
    payload:{
        searchQuery
    }
});