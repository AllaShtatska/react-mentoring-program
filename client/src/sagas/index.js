import { all } from "redux-saga/effects";

import watchFetchMovie from "./watchFetchMovie";
import watchFetchMovies from "./watchFetchMovies";
import watchFetchMoviesOfTheSameGenre from "./watchFetchMoviesOfTheSameGenre";

function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMoviesOfTheSameGenre(),
    watchFetchMovie()
  ]);
}

export default rootSaga;
