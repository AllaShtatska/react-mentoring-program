import {MOVIES_OF_THE_SAME_GENRE_FETCH_REQUESTED} from './actionTypes'
import {moviesOfTheSameGenreFetchRequested} from './moviesOfTheSameGenreFetchRequested';

it('should return action MOVIES_OF_THE_SAME_GENRE_FETCH_REQUESTED', () => {
    const genres = ["Comedy", "Drama"]
    
    expect(moviesOfTheSameGenreFetchRequested(genres)).toEqual({
        type: MOVIES_OF_THE_SAME_GENRE_FETCH_REQUESTED,
        genres
    })
});