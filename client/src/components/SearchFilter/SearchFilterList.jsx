// @flow

import React from "react";

import SEARCH_FILTER_TYPE from "./searchFilterType";
import SearchFilter from "./SearchFilter";
import inlineStyles from "../../static/inline.css";

type SearchFilterListProps = {
  filter: string,
  onSwitchFilter: function
};

const SearchFilterList = (searchFilterListProps:SearchFilterListProps) => {
  const{ filter, onSwitchFilter } = searchFilterListProps;
  const searchFilters = Object.values(SEARCH_FILTER_TYPE).map((searchFilter:mixed) => (
    (typeof searchFilter === 'string') &&
    <SearchFilter
      key={searchFilter}
      currentFilter={filter}
      filter={searchFilter}
      onSwitchFilter={onSwitchFilter}
    />
  ));

  return (
    <div className={inlineStyles.inline}>
      Search by
      {searchFilters}
    </div>
  );
};

export default SearchFilterList;
