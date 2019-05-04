import { SET_SELECTED_MOVIE, MOVIES_OF_THE_SAME_GENRE_FETCH_SUCCEEDED } from '../actions/actionTypes';
import movieDetails from './movieDetails'

describe('movieDetails reducer', () => {
    it('should return the initial state', () => {
        expect(movieDetails(undefined, {})).toEqual({
            selectedMovie: null,
            moviesOfTheSameGenre: []
        });
    });

    it('should set selected movie', () => {
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

        expect(movieDetails({ selectedMovie: null, moviesOfTheSameGenre: [] }, { type: SET_SELECTED_MOVIE, movie: movie })).toEqual({
            selectedMovie: movie,
            moviesOfTheSameGenre: []
        });
    });

    it('should set movies of the same genre', () => {
        const movies = {
            date: [{
                id: "1",
                title: "Kill Bill: Vol1",
                genres: ["Actions&Advanture"],
                release_date: "October 10, 2003",
                vote_average: 10,
                poster_path: '../images/Kill_Bill_Volume_1.png',
                runtime: 111,
                overview: "Kill Bill: Vol1 overview"
            },
            {
                id: "2",
                title: "Kill Bill: Vol2",
                genres: ["Actions&Advanture"],
                release_date: "April 16, 2004",
                vote_average: 8,
                poster_path: '../images/Kill_Bill_Volume_2.png',
                runtime: 136,
                overview: "Kill Bill: Vol1 overview"
            }]
        };

        expect(movieDetails({ selectedMovie: movies[0], moviesOfTheSameGenre: [] }, { type: MOVIES_OF_THE_SAME_GENRE_FETCH_SUCCEEDED, movies: movies })).toEqual({
            selectedMovie: movies[0],
            moviesOfTheSameGenre: movies.data
        });
    });
});