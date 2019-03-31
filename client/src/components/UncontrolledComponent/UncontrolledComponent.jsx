import React from 'react';

class UncontrolledComponent extends React.Component{
    handleSubmitClick(){
        const name = this.textInput.value;
        console.log(name);
    }

    render(){
        return(
            <div>
                <input type="text" ref={(input)=>this.textInput = input}/>
                <button onClick={this.handleSubmitClick.bind(this)}>Sign up</button>
            </div>
        );
    }
}

export default UncontrolledComponent;
//ReactDOM.render(<UncontrolledComponent />, document.getElementById('root'));