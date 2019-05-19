import {moviesFetchRequested} from './moviesFetchRequested';

it('should return action MOVIES_FETCH_REQUESTED', () => {
    const searchQuery="search=transf";
    
    const expectedAction={
        type:'MOVIES_FETCH_REQUESTED',
        payload:{
            searchQuery
        }
    };
    
    const moviewFetchRequestedAction = moviesFetchRequested(searchQuery);

    expect(moviewFetchRequestedAction).toEqual(expectedAction);
});