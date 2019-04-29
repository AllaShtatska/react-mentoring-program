import {put, takeEvery} from 'redux-saga/effects';

import SEARCH_FILTER_TYPE from '../components/SearchFilter/searchFilterType'
import SORT_TYPE from '../components/Sort/sortType';
import {MOVIES_FETCH_REQUESTED, MOVIES_FETCH_SUCCEEDED, MOVIES_FETCH_FAILED} from '../actions/actionTypes';

const getFilterPart = (filterType, filterValue) => {
    if (filterValue==="") return "";
    switch (filterType) {
        case SEARCH_FILTER_TYPE.title:
            return "&search="+filterValue+"&searchBy=title";
        case SEARCH_FILTER_TYPE.genre:
            return "&search="+filterValue+"&searchBy=genres"
    };
};

const getSortPart = (sortType) => {
    switch (sortType) {
        case SORT_TYPE.releaseDate:
            return "&sortBy=release_date&sortOrder=desc";
        case SORT_TYPE.rating:
            return "&sortBy=vote_average&sortOrder=desc"
    }
};


function* fetchMovies(action) {
    try {
        const movies = yield fetch('https://reactjs-cdp.herokuapp.com/movies?limit=5000' + getFilterPart(action.payload.filterType, action.payload.filterValue) + getSortPart(action.payload.sortType)).then(function (response) {
            return response.json();
        });
        yield put({ type: MOVIES_FETCH_SUCCEEDED, movies });
    } catch (error) {
        yield put({ type: MOVIES_FETCH_FAILED, error });
    }
};

function* watchFetchMovies(){
    yield takeEvery(MOVIES_FETCH_REQUESTED, fetchMovies);
};

export default watchFetchMovies;