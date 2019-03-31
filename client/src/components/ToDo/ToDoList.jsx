import React from 'react';

const ToDoList=({list}) => (
    <ul>{list.map((todo)=><li>{todo.name}</li>)}</ul>
);

export default ToDoList;

/* var todoList = [
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

ReactDOM.render(<TodoList list={todoList}/>, document.getElementById('root')); */