import inlineStyles from "../../static/inline.css";
import sortButtonStyles from "../../static/sort-button.css";

import React from "react";
import SORT_TYPE from "./sortType";

class SortOption extends React.Component {
  get className() {
    const isSortOptionSelected =
      this.props.currentSortType === this.props.sortType;

    return isSortOptionSelected
      ? sortButtonStyles["sort-button-selected"]
      : sortButtonStyles["sort-button-deselected"];
  }

  getSortOptionTitle() {
    switch (this.props.sortType) {
      case SORT_TYPE.rating:
        return "rating";
      case SORT_TYPE.releaseDate:
        return "release date";
    }
  }

  render() {
    return (
      <div className={inlineStyles.inline}>
        <button
          className={this.className}
          onClick={() => this.props.onSwitchSortType(this.props.sortType)}
        >
          {this.getSortOptionTitle()}
        </button>
      </div>
    );
  }
}

export default SortOption;
