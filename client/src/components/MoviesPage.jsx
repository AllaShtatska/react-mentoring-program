import React from "react";
import Router from "next/router";

import SearchContainer from "./SearchContainer";
import MoviesResults from "./MoviesResults";

import { getFilterPart, getSortPart } from "../common/queryUtils";

class MoviesPage extends React.Component {
  onSelectMovie(selectedMovie) {
    if (selectedMovie !== null) {
      Router.push("/film/" + selectedMovie.id);
    }
  }

  onSearch(filterValue) {
    this.props.search(filterValue);
    Router.push(
      "/search/" +
        getFilterPart(this.props.filterType, filterValue) +
        getSortPart(this.props.sortType)
    );
  }

  render() {
    return (
      <div>
        <div>
          <SearchContainer
            onSearch={this.onSearch.bind(this)}
            filter={this.props.filterType}
            onSwitchFilter={this.props.switchFilter}
          />
        </div>
        <div>
          <MoviesResults
            list={this.props.list}
            sortType={this.props.sortType}
            switchSortType={this.props.switchSortType}
            selectMovie={this.onSelectMovie.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default MoviesPage;
