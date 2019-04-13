import '../../static/inline.css';
import '../../static/margin-left.css';

import React from 'react';
import PropTypes from 'prop-types';
import SortOption from './SortOption';
import SORT_TYPE from './sortType';


const SortOptionsList = ({ currentSortType, onSwitchSortType }) => {
    const sortOptions = Object.values(SORT_TYPE).map(sortType => (
      <SortOption
        key={sortType}
        currentSortType={currentSortType}
        sortType={sortType}
        onSwitchSortType={onSwitchSortType}
     />
    ));
    
    return(
      <div className="inline margin-left">
        Sort By
        { sortOptions }
      </div>
    );
  };

  SortOptionsList.propTypes = {
    currentSortType: PropTypes.string.isRequired,
    onSwitchSortType: PropTypes.func.isRequired,
  };

  export default SortOptionsList;