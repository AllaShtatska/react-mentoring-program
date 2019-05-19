import React from "react";
import { connect } from "react-redux";

import { moviesFetchRequested } from "../src/actions/moviesFetchRequested";
import { cleanMovies } from "../src/actions/cleanMovies";
import MoviesContainer from "../src/containers/MoviesContainer";

class Search extends React.Component {
  static getInitialProps(props) {
    const { query } = props.ctx;
    return { query };
  }

  componentDidMount() {
    this.props.dispatch(cleanMovies());
    this.props.dispatch(moviesFetchRequested(this.props.query.searchQuery));
  }

  render() {
    return <MoviesContainer />;
  }
}

export default connect()(Search);
