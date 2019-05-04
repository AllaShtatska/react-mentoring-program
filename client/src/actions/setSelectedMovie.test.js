import { SET_SELECTED_MOVIE } from './actionTypes';
import { setSelectedMovie } from './setSelectedMovie';

it('should return action SET_SELECTED_MOVIE', () => {
    const movie = {
        id: "1",
        title: "Kill Bill: Vol1",
        genre: ["Actions&Advanture"],
        release_date: "October 10, 2003",
        vote_average: 10,
        poster_path: '../images/Kill_Bill_Volume_1.png',
        runtime: 111,
        overview: "Kill Bill: Vol1 overview"
    };

    expect(setSelectedMovie(movie)).toEqual({
        type: SET_SELECTED_MOVIE,
        movie
    })
});