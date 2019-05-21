import React from "react";
import { connect } from "react-redux";

import MovieContainer from "../src/containers/MovieContainer";

class Film extends React.Component {
  render() {
    return <MovieContainer />;
  }
}

export default connect()(Film);
