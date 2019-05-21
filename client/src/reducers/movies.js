import SEARCH_FILTER_TYPE from "../components/SearchFilter/searchFilterType";
import SORT_TYPE from "../components/Sort/sortType";

import {
  MOVIES_FETCH_REQUESTED,
  MOVIES_FETCH_SUCCEEDED,
  SWITCH_SORT_TYPE,
  SWITCH_FILTER,
  SEARCH,
  ERROR_HAPPENED,
  CLEAN_MOVIES
} from "../actions/actionTypes";

const initialState = {
  list: [],
  filter: SEARCH_FILTER_TYPE.title,
  filterValue: "",
  sortType: SORT_TYPE.releaseDate,
  hasError: false
};

const getFilterValue = query => {
  var search = query.match(/search=.*&searchBy=/i);
  var filterValue = search[0].substring(
    "search=".length,
    search[0].length - "&searchBy=".length
  );
  return filterValue;
};

const getFilterType = query => {
  var searchBy = query.match(/searchBy=.*&sortBy=/i);
  var filterType = searchBy[0].substring(
    "searchBy=".length,
    searchBy[0].length - "&sortBy=".length
  );
  if (filterType == "genres") return "genre";
  return filterType;
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_REQUESTED:
      return {
        ...state,
        filter: getFilterType(action.payload.searchQuery),
        filterValue: getFilterValue(action.payload.searchQuery)
      };
    case MOVIES_FETCH_SUCCEEDED:
      return {
        ...state,
        list: action.movies.data
      };
    case SWITCH_SORT_TYPE:
      return {
        ...state,
        sortType: action.sortType
      };
    case SWITCH_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    case SEARCH:
      return {
        ...state,
        filterValue: action.filterValue
      };
    case ERROR_HAPPENED:
      return {
        ...state,
        hasError: true
      };
    case CLEAN_MOVIES:
      return {
        ...state,
        list: [],
        hasError: false
      };
  }
  return state;
};

export default movies;
