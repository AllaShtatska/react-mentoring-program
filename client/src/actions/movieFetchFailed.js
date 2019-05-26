import { MOVIE_FETCH_FAILED } from "./actionTypes";

export const movieFetchFailed = error => ({
  type: MOVIE_FETCH_FAILED,
  payload: {
    error,
  },
});
