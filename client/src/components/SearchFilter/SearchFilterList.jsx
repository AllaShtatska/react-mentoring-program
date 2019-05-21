import React from "react";
import PropTypes from "prop-types";

import SEARCH_FILTER_TYPE from "./searchFilterType";
import SearchFilter from "./SearchFilter";
import inlineStyles from "../../static/inline.css";

const SearchFilterList = ({ filter, onSwitchFilter }) => {
  const searchFilters = Object.values(SEARCH_FILTER_TYPE).map(searchFilter => (
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

SearchFilterList.propTypes = {
  filter: PropTypes.string.isRequired,
  onSwitchFilter: PropTypes.func.isRequired
};

export default SearchFilterList;
