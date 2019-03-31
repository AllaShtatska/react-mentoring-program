import React from 'react';
import ToDoList from './ToDoList';

var todoList = [
    {
        name: 'item1',
        status: 'active'
    },
    {
        name: 'item2',
        status:'active'
    },
    {
        name: 'item3',
        status: 'done'
    }  
];

class ToDoContainer extends React.Component{
    constructor (){
        super();
        this.state = {list:[]};
    }

    componentDidMount(){
        this.setState({
            list:todoList
        });
    }

    render(){
        return(
            <div>
                <ToDoList list={this.state.list}/>
            </div>
        );
    }
}

export default ToDoContainer;

//ReactDOM.render(<ToDoContainer />, document.getElementById('root'));
