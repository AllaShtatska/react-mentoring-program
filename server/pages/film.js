import React from "react";
import { connect } from "react-redux";

import MovieContainer from "../containers/MovieContainer";

class Film extends React.Component {
  /*static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }*/
  /*static getInitialProps({ query: { searchQuery } }) {
    return { searchQuery: searchQuery };
  }*/

  render() {
    return <MovieContainer />;
  }
}

export default connect()(Film);
