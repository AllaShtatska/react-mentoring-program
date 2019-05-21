import inlineStyles from "../../static/inline.css";
import filterButtonStyles from "../../static/filter-button.css";

import React from "react";
import SEARCH_FILTER_TYPE from "./searchFilterType";

class SearchFilter extends React.Component {
  get className() {
    const isFilterSelected = this.props.currentFilter === this.props.filter;

    return isFilterSelected
      ? filterButtonStyles["filter-button-selected"]
      : filterButtonStyles["filter-button-deselected"];
  }

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
        <button
          className={this.className}
          onClick={() => this.props.onSwitchFilter(this.props.filter)}
        >
          {this.getFilterTitle()}
        </button>
      </div>
    );
  }
}

export default SearchFilter;
