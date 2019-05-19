import React from "react";
import { connect } from "react-redux";

import NotFound from "../src/components/NotFound";

class Other extends React.Component {
  render() {
    return <NotFound />;
  }
}

export default connect()(Other);
