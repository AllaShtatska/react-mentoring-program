import React from "react";
import EmptyMovieResult from "./EmptyMoviesResults";
import MoviesList from "./MoviesList";
import MoviesSummary from "./MoviesSummary";
import SortOptionsList from "./Sort/SortOptionsList";

const MoviesResults = ({ list, sortType, switchSortType, selectMovie }) => (
  <div>
    <div>
      {list.size === 0 ? (
        <EmptyMovieResult />
      ) : (
        <div>
          <MoviesSummary count={list.size} />
          <SortOptionsList
            currentSortType={sortType}
            onSwitchSortType={switchSortType}
          />
          <MoviesList list={list} onSelectMovie={selectMovie} />
        </div>
      )}
    </div>
  </div>
);

export default MoviesResults;
