import inlineStyles from "../../static/inline.css";

import React from "react";

import SEARCH_FILTER_TYPE from "./searchFilterType";
import FilterButton from "./FilterButton";

class SearchFilter extends React.Component {
  getFilterTitle() {
    switch (this.props.filter) {
      case SEARCH_FILTER_TYPE.genre:
        return "Genre";
      case SEARCH_FILTER_TYPE.title:
        return "Title";
    }
  }

  render() {
    return (
      <div className={inlineStyles.inline}>
        <FilterButton
          selected={this.props.currentFilter === this.props.filter}
          onClick={() => this.props.onSwitchFilter(this.props.filter)}
        >
          {this.getFilterTitle()}
        </FilterButton>
      </div>
    );
  }
}

export default SearchFilter;
