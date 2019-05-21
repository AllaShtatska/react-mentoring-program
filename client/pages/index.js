import React from "react";
import { connect } from "react-redux";

import MoviesContainer from "../src/containers/MoviesContainer";

class Index extends React.Component {
  render() {
    return <MoviesContainer />;
  }
}

export default connect()(Index);
