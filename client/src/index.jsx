import React from "react";
import ReactDOM from "react-dom";
import HelloWorldComponent from "./components/HelloWorldComponent";
import HelloWorldPureComponent from "./components/HelloWorldPureComponent";
import HelloWorldFunction from "./components/HelloWorldFunction";

ReactDOM.render(<HelloWorldComponent />, document.getElementById("root"));
ReactDOM.render(<HelloWorldPureComponent />, document.getElementById("root1"));
ReactDOM.render(<HelloWorldFunction />, document.getElementById("root2"));