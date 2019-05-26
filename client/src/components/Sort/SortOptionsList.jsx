// @flow

import inlineStyles from "../../static/inline.css";
import marginLeftStyles from "../../static/margin-left.css";

import React from "react";
import SortOption from "./SortOption";
import SORT_TYPE from "./sortType";

type SortOptionsListProps = {
  currentSortType: string,
  onSwitchSortType: function
};

const SortOptionsList = (sortOptionListProps:SortOptionsListProps) => {
  const { currentSortType, onSwitchSortType } = sortOptionListProps;

  const sortOptions = Object.values(SORT_TYPE).map((sortType:mixed) => (
    (typeof sortType === 'string') &&
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

export default SortOptionsList;
