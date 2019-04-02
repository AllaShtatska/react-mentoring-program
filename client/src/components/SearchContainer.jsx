import React from 'react';
import SearchFilterList from './SearchFilter/SearchFilterList';

const ENTER_KEY_CODE = 13;

class SearchContainer extends React.Component{
    handleKeyDown(event){
        if (event.keyCode===ENTER_KEY_CODE){
            this.props.onSearch(this.input.value);
        }
    }

    render(){
        return (
            <div>
                <div>
                    Find your movie
                </div>
                <div>
                    <input type="text" ref={(input)=>this.input=input} onKeyDown={this.handleKeyDown.bind(this)}/>
                </div>
                <div>
                    <SearchFilterList filter={this.props.filter} onSwitchFilter={this.props.onSwitchFilter}/>
                    <button onClick={()=>this.props.onSearch(this.input.value)}>Search</button>                    
                </div>
            </div>
        );
    }
}

export default SearchContainer;