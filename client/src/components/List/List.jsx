import React from 'react';
import Item from './Item';

class List extends React.Component{
    constructor(){
        super();
        this.state = {items:[{name:'first'}, {name:'second'}, {name:'third'}]};
    }

    onDelete(item){
        this.setState({items: this.state.items.filter((i)=> i !== item)});
    }

    render(){
        return(
            <ul>
                {this.state.items.map((item)=><Item key={item.name} item={item} onDelete={this.onDelete.bind(this)}/>)}
            </ul>
        );
    }
}

export default List;

//ReactDOM.render(<List />, document.getElementById('root'));