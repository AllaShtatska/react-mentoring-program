import {MOVIES_FETCH_REQUESTED} from './actionTypes';
import {moviesFetchRequested} from './moviesFetchRequested';
import SEARCH_FILTER_TYPE from '../components/SearchFilter/searchFilterType';
import SORT_TYPE from '../components/Sort/sortType';

it('should return action MOVIES_FETCH_REQUESTED', () => {
    const filterType = SEARCH_FILTER_TYPE.genre;
    const filterValue = "Comedy";
    const sortType = SORT_TYPE.releaseDate;
    
    expect(moviesFetchRequested(filterType, filterValue, sortType)).toEqual({
        type: MOVIES_FETCH_REQUESTED,
        payload: {
            filterType: filterType,
            filterValue: filterValue,
            sortType: sortType
        }
    })
});