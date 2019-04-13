import React from 'react';
import EmptyMovieResult from './EmptyMoviesResults';
import MoviesList from './MoviesList';
import MoviesSummary from './MoviesSummary';
import SortOptionsList from './Sort/SortOptionsList';

class MoviesResults extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {(this.props.list.length === 0) ? <EmptyMovieResult /> : <div><MoviesSummary count={this.props.list.length}/><SortOptionsList currentSortType={this.props.sortType} onSwitchSortType={this.props.onSwitchSortType}/><MoviesList list={this.props.list} onSelectMovie={this.props.onSelectMovie}/></div>}
                </div>
            </div>
        );
    }
}

export default MoviesResults;