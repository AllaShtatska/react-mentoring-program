import {SEARCH} from './actionTypes'
import {search} from './search'

it('should return action SEARCH', () => {
    const filterValue = "mile";

    expect(search(filterValue)).toEqual({
        type: SEARCH,
        filterValue
    })
});