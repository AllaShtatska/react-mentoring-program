import React from 'react';

class NameBox extends React.Component{
    render(){
        return (
            <div className="name">
                My name is {this.props.name}
            </div>
        );
    }
}

export default NameBox;