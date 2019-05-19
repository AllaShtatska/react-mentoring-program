import { put, takeEvery } from "redux-saga/effects";

import {
  MOVIES_FETCH_REQUESTED,
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED
} from "../actions/actionTypes";

function* fetchMovies(action) {
  try {
    const movies = yield fetch(
      "https://reactjs-cdp.herokuapp.com/movies?limit=5000" +
        action.payload.searchQuery
    ).then(function(response) {
      return response.json();
    });
    yield put({ type: MOVIES_FETCH_SUCCEEDED, movies });
  } catch (error) {
    yield put({ type: MOVIES_FETCH_FAILED, error });
  }
}

function* watchFetchMovies() {
  yield takeEvery(MOVIES_FETCH_REQUESTED, fetchMovies);
}

export default watchFetchMovies;
