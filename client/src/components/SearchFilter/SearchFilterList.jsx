import React from 'react';
import searchFilterType from './searchFilterType'
import SearchFilter from './SearchFilter'

class SearchFilterList extends React.Component {
    render() {
        return (
            <div className="inline">
                Search by
                <SearchFilter currentFilter={this.props.filter} filter={searchFilterType.title} onSwitchFilter={this.props.onSwitchFilter}/>
                <SearchFilter currentFilter={this.props.filter} filter={searchFilterType.genre} onSwitchFilter={this.props.onSwitchFilter}/>
            </div>
        );
    }
}

export default SearchFilterList;