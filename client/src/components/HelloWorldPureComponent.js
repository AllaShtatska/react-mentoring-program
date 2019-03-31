import React from "react";
import HelloWorldTitleH1 from "./HelloWorldTitleH1";
import HelloWorldTitleH2 from "./HelloWorldTitleH2";

class HelloWorldPureComponent extends React.PureComponent {
    render() {
      return React.createElement("div", null, HelloWorldTitleH1, HelloWorldTitleH2);
    }
};

export default HelloWorldPureComponent;