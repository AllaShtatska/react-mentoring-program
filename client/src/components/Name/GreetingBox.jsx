import React from 'react';
import NameBox from './NameBox.jsx'

class GreetingBox extends React.Component {
    constructor() {
        super();
        this.state = { name: "Alla" }
    }

    handleClick() {
        this.setState({ name: "stranger" });
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.handleClick.bind(this)}>Change Name</button>
                <NameBox name={this.state.name}/>
            </div>
        );
    }
}

export default GreetingBox;