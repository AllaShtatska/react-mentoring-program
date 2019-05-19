import React from "react";
import { connect } from "react-redux";

import NotFound from "../components/NotFound";

class Other extends React.Component {
  /*static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }*/
  /*static getInitialProps({ query: { searchQuery } }) {
    return { searchQuery: searchQuery };
  }*/

  render() {
    return <NotFound />;
  }
}

export default connect()(NotFound);
