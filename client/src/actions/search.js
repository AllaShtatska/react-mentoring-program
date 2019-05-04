import {SEARCH} from './actionTypes'

export const search = (filterValue)=>({
    type: SEARCH,
    filterValue
});