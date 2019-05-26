import React from "react";
import { createSelector } from "reselect";
import EmptyMovieResult from "./EmptyMoviesResults";
import MoviesList from "./MoviesList";
import MoviesSummary from "./MoviesSummary";
import SortOptionsList from "./Sort/SortOptionsList";

const getMovies = movies => movies;

const getMoviesSize = createSelector(
  getMovies,
  movies => movies.size
);

const MoviesResults = ({ list, sortType, switchSortType, selectMovie }) => (
  <div>
    <div>
      {getMoviesSize(list) === 0 ? (
        <EmptyMovieResult />
      ) : (
        <div>
          <MoviesSummary count={getMoviesSize(list)} />
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
