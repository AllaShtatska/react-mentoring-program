import { MOVIE_FETCH_SUCCEEDED } from "./actionTypes";

export const movieFetchSucceeded = movie => ({
  type: MOVIE_FETCH_SUCCEEDED,
  payload: {
    movie,
  },
});
