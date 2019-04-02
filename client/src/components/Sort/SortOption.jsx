import '../../static/inline.css';
import '../../static/sort-button.css';

import React from 'react';
import sortType from './sortType'

class SortOption extends React.Component {
    isSortOptionSelected() {
        return this.props.currentSortType === this.props.sortType;
    }

    getClassName() {
        return this.isSortOptionSelected() ? 'sort-button-selected' : 'sort-button-deselected';
    }

    getSortOptionTitle() {
        switch (this.props.sortType) {
            case sortType.rating: return "rating";
            case sortType.releaseDate:
            default: return "release date";
        }
    }

    render() {
        return (
            <div className="inline">
                <button className={this.getClassName()} onClick={() => this.props.onSwitchSortType(this.props.sortType)}>{this.getSortOptionTitle()}</button>
            </div>
        );
    }
}

export default SortOption;