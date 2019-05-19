import React from "react";
import { connect } from "react-redux";

import MoviesContainer from "../containers/MoviesContainer";

class Index extends React.Component {
  /*static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }*/

  render() {
    return <MoviesContainer />;
  }
}

export default connect()(Index);
