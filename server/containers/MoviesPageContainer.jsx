import { connect } from "react-redux";
import { withRouter } from "next/router";

import { search } from "../actions/search";
import { switchFilter } from "../actions/switchFilter";
import { switchSortType } from "../actions/switchSortType";
import { moviesFetchRequested } from "../actions/moviesFetchRequested";

import MoviesPage from "../components/MoviesPage";

import { getFilterPart, getSortPart } from "../common/queryUtils";

const mapStateToProps = state => ({
  list: state.movies.list,
  filterType: state.movies.filter,
  sortType: state.movies.sortType,
  selectedMovie: state.movieDetails.selectedMovie
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchSortType: sortType => {
    console.log(ownProps.filter);
    console.log(ownProps.filterValue);
    dispatch(switchSortType(sortType));
    dispatch(
      moviesFetchRequested(
        getFilterPart(ownProps.filter, ownProps.filterValue) +
          getSortPart(sortType)
      )
    );
  },
  switchFilter: filter => {
    dispatch(switchFilter(filter));
  },
  search: filterValue => {
    dispatch(search(filterValue));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviesPage)
);
