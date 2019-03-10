const HelloWorldTitleH1 = React.createElement(
    "h1",
    {className: "title"},
    "Hello World!"
);
const HelloWorldTitleH2 = React.createElement(
    "h2",
    {className: "title"},
    "Hello World!"
);
const HelloWorldTitleH3 = React.createElement(
    "h3",
    {className: "title"},
    "Hello World!"
);
class HelloWorldComponent extends React.Component {
    render() {
      return React.createElement("div", null, HelloWorldTitleH1, HelloWorldTitleH2);
    }
}

class HelloWorldPureComponent extends React.PureComponent {
    render() {
      return React.createElement("div", null, HelloWorldTitleH1, HelloWorldTitleH2);
    }
}

function HelloWordldFunction(props){
    return React.createElement("div", null, HelloWorldTitleH1, HelloWorldTitleH2);
}
    
ReactDOM.render(React.createElement(HelloWorldComponent), document.getElementById("root"));
ReactDOM.render(React.createElement(HelloWorldPureComponent), document.getElementById("root1"));
ReactDOM.render(React.createElement(HelloWordldFunction), document.getElementById("root2"));