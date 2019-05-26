import { put, takeEvery } from "redux-saga/effects";

const getFilterByTheSameGenrePart = genres => `&filter=${genres}`;


function* fetchMoviesOfTheSameGenre(action) {
  try {
    const movies = yield fetch(`https://reactjs-cdp.herokuapp.com/movies?limit=5000${getFilterByTheSameGenrePart(action.genres)}`).then(response => response.json());
    yield put({ type: "MOVIES_OF_THE_SAME_GENRE_FETCH_SUCCEEDED", movies });
  } catch (error) {
    yield put({ type: "MOVIES_OF_THE_SAME_GENRE_FETCH_FAILED", error });
  }
}

function* watchFetchMoviesOfTheSameGenre() {
  yield takeEvery("MOVIES_OF_THE_SAME_GENRE_FETCH_REQUESTED", fetchMoviesOfTheSameGenre);
}

export default watchFetchMoviesOfTheSameGenre;
