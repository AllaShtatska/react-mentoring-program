import '../../static/inline';
import '../../static/filter-button';

import React from 'react';
import searchFilterType from './searchFilterType'

class SearchFilter extends React.Component {
    isFilterSelected() {
        return this.props.currentFilter === this.props.filter;
    }

    getClassName() {
        return this.isFilterSelected() ? 'filter-button-selected' : 'filter-button-deselected';
    }

    getFilterTitle() {
        switch (this.props.filter) {
            case searchFilterType.genre: return "Genre";
            case searchFilterType.title:
            default: return "Title";
        }
    }

    render() {
        return (
            <div className="inline">
                <button className={this.getClassName()} onClick={() => this.props.onSwitchFilter(this.props.filter)}>{this.getFilterTitle()}</button>
            </div>
        );
    }
}

export default SearchFilter;