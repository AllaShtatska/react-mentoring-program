import React from 'react'

class Component extends React.Component{
    constructor (){
        super();
        this.state = {clicked:false};
    }

    keyDownHandler(event){
        console.log("button pressed");
    }

    clickHandler(event){
        this.setState({clicked:true});
    }

    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.keyDownHandler} />
                <button onClick={this.clickHandler.bind(this)}>Click me</button>
                {this.state.clicked?<div>clicked</div>:null}
            </div>
        );
    }
}

export default Component;

//ReactDOM.render(<Component />, document.getElementById('root'));