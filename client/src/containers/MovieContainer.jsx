import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";

import { errorHappened } from "../actions/errorHappened";
import { movieFetchRequested } from "../actions/movieFetchRequested";
import { cleanMovieDetails } from "../actions/cleanMovieDetails";
import MoviePageContainer from "./MoviePageContainer";

const mapStateToProps = state => ({
  hasError: state.movieDetails.hasError
});

const mapDispatchToProps = dispatch => ({
  errorHappened: () => {
    dispatch(errorHappened());
  },
  fetchMovie: id => {
    dispatch(movieFetchRequested(id));
  },
  cleanMovieDetails: () => {
    dispatch(cleanMovieDetails());
  }
});

class MovieContainer extends React.Component {
  componentWillMount() {
    this.loadMovieDetails();
  }

  loadMovieDetails() {
    this.props.cleanMovieDetails();
    if (this.props.router.query.id !== undefined) {
      this.props.fetchMovie(this.props.router.query.id);
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

    return <MoviePageContainer />;
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieContainer)
);
