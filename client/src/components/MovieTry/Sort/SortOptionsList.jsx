import '../../../static/inline';
import '../../../static/margin-left';

import React from 'react';
import SortOption from './SortOption';
import sortType from './sortType';


class SortOptionsList extends React.Component{
    render(){
        return(
            <div className="inline margin-left">
                Sort By
                <SortOption currentSortType={this.props.sortType} sortType={sortType.releaseDate} onSwitchSortType={this.props.onSwitchSortType}/>
                <SortOption currentSortType={this.props.sortType} sortType={sortType.rating} onSwitchSortType={this.props.onSwitchSortType}/>
            </div>
        );
    }
}

export default SortOptionsList;