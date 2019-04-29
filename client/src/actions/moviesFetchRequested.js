import {MOVIES_FETCH_REQUESTED} from './actionTypes'

export const moviesFetchRequested = (filterType, filterValue, sortType) => ({
    type: MOVIES_FETCH_REQUESTED,
    payload:{
        filterType: filterType,
        filterValue: filterValue,
        sortType: sortType
    }
});