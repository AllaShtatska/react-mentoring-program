import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { errorHappened } from "../actions/errorHappened";
import { moviesFetchRequested } from "../actions/moviesFetchRequested";
import { cleanMovies } from "../actions/cleanMovies";
import MoviesPageContainer from "./MoviesPageContainer";

const mapStateToProps = state => ({
  filter: state.movies.filter,
  filterValue: state.movies.filterValue,
  sortType: state.movies.sortType,
  hasError: state.movies.hasError
});

const mapDispatchToProps = dispatch => ({
  errorHappened: () => {
    dispatch(errorHappened());
  },
  moviesFetch: searchQuery => {
    dispatch(moviesFetchRequested(searchQuery));
  },
  cleanMovies: () => {
    dispatch(cleanMovies());
  }
});

class MoviesContainer extends React.Component {
  componentWillMount() {
    this.loadMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      this.loadMovies();
    }
  }

  loadMovies() {
    this.props.cleanMovies();
    if (this.props.match.params.searchQuery !== undefined) {
      this.props.moviesFetch(this.props.match.params.searchQuery);
    }
  }

  componentDidCatch(error, info) {
    this.props.errorHappened();
    console.log("I crashed: " + error + " " + info);
  }

  render() {
    if (this.props.hasError) {
      return <div>There is some error</div>;
    }

    return (
      <MoviesPageContainer
        filter={this.props.filter}
        sortType={this.props.sortType}
        filterValue={this.props.filterValue}
      />
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviesContainer)
);
