import React from 'react';

class Item extends React.Component{
    render(){
        return (
            <li>
                {this.props.item.name}
                <button onClick={()=>this.props.onDelete(this.props.item)}>Remove</button>
            </li>
        )
    }
}

export default Item;