import inlineStyles from "../../static/inline.css";
import marginLeftStyles from "../../static/margin-left.css";

import React from "react";
import PropTypes from "prop-types";
import SortOption from "./SortOption";
import SORT_TYPE from "./sortType";

const SortOptionsList = ({ currentSortType, onSwitchSortType }) => {
  const sortOptions = Object.values(SORT_TYPE).map(sortType => (
    <SortOption
      key={sortType}
      currentSortType={currentSortType}
      sortType={sortType}
      onSwitchSortType={onSwitchSortType}
    />
  ));

  const className = inlineStyles.inline + " " + marginLeftStyles["margin-left"];

  return (
    <div className={className}>
      Sort By
      {sortOptions}
    </div>
  );
};

SortOptionsList.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  onSwitchSortType: PropTypes.func.isRequired
};

export default SortOptionsList;
