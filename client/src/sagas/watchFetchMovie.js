import { put, takeEvery } from "redux-saga/effects";

import { MOVIE_FETCH_REQUESTED } from "../actions/actionTypes";
import { movieFetchSucceeded } from "../actions/movieFetchSucceeded";
import { movieFetchFailed } from "../actions/movieFetchFailed";
import { moviesOfTheSameGenreFetchRequested } from "../actions/moviesOfTheSameGenreFetchRequested";

function* fetchMovie(action) {
  try {
    const movie = yield fetch(`https://reactjs-cdp.herokuapp.com/movies/${action.payload.filmId}`).then(response => response.json());
    yield put(movieFetchSucceeded(movie));
    yield put(moviesOfTheSameGenreFetchRequested(movie.genres));
  } catch (error) {
    yield put(movieFetchFailed(error));
  }
}

function* watchFetchMovie() {
  yield takeEvery(MOVIE_FETCH_REQUESTED, fetchMovie);
}

export default watchFetchMovie;
