import React from 'react';

import SearchContainer from './SearchContainer';
import MoviesResults from './MoviesResults';

const MoviesPage = ({ list, filterType, switchFilter, sortType, switchSortType, selectMovie, search }) => (
    <div>
        <div>
            <SearchContainer onSearch={search} filter={filterType} onSwitchFilter={switchFilter} />
        </div>
        <div>
            <MoviesResults list={list} sortType={sortType} switchSortType={switchSortType} selectMovie={selectMovie}/>
        </div>
    </div>
)

export default MoviesPage;