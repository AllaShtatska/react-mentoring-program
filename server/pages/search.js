import React from "react";
import { connect } from "react-redux";

import { moviesFetchRequested } from "../actions/moviesFetchRequested";
import { cleanMovies } from "../actions/cleanMovies";
import MoviesContainer from "../containers/MoviesContainer";

import SEARCH_FILTER_TYPE from "../components/SearchFilter/searchFilterType";

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
