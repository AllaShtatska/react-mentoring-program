import { connect } from "react-redux";
import { withRouter } from "next/router";

import MoviePage from "../components/MoviePage";

const mapStateToProps = state => ({
  selectedMovie: state.movieDetails.selectedMovie,
  moviesOfTheSameGenre: state.movieDetails.moviesOfTheSameGenre
});

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoviePage)
);
