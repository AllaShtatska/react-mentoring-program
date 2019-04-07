import React from 'react';
import MoviesResults from './MoviesResults'
import movies from './movies'
import SearchContainer from './SearchContainer';
import SEARCH_FILTER_TYPE from './SearchFilter/searchFilterType';
import SORT_TYPE from './Sort/sortType'
import BackToSearch from './BackToSearch'
import MoviePage from './MoviePage'

class MoviesContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            filter: SEARCH_FILTER_TYPE.title,
            sortType: SORT_TYPE.releaseDate,
            selectedMovie:null,
            moviesOfTheSameGenre:[],
            hasError:false
        };
    }

    componentDidMount() {
        this.setState({
            list: this.sort(movies.data, this.state.sortType)
        });
    }

    componentDidCatch(error, info){
        this.setState({hasError:true});
        console.log("I crashed: " + error +" "+info);
    }

    onSwitchFilter(type) {
        if (this.state.filter === type)
            return;

        this.setState({
                filter: type
            });
    }

    sortByReleaseDate(first, second) {
        return new Date(second.release_date) - new Date(first.release_date);
    }

    sortByRating(first, second) {
        return second.vote_average - first.vote_average;
    }

    sort(inMovies, sortBy) {
        switch (sortBy) {
            case SORT_TYPE.rating:
                return [...inMovies].sort(this.sortByRating);
            case SORT_TYPE.releaseDate:
            default:
                return [...inMovies].sort(this.sortByReleaseDate);
        }
    }

    onSwitchSortType(type) {
        if (this.state.sortType === type)
            return;

        this.setState({
            sortType: type,
            list: this.sort(this.state.list, type)
        });
    }

    onSearch(filterValue) {
        var filteredMovies = movies.data;
        if (this.state.filter === SEARCH_FILTER_TYPE.title) {
            filteredMovies = movies.data.filter((movie) => movie.title.toLowerCase().includes(filterValue.toLowerCase()));
        }
        else if (filterValue.trim() !== ""){
            filteredMovies = movies.data.filter((movie) => movie.genre.map(item => item.toLowerCase()).includes(filterValue.toLowerCase()));
        }
        this.setState({
            list:this.sort(filteredMovies, this.state.sortType)
        })
    }

    onSelectMovie(movie){
        this.setState({
            selectedMovie: movie,
            moviesOfTheSameGenre:this.findMoviesOfTheSameGenre(movie)
        });
    }

    findMoviesOfTheSameGenre(selectedMovie){
        if (selectedMovie === null) return [];
        return movies.data.filter((movie) => movie.genre.map(item => item.toLowerCase()).includes(selectedMovie.genre[0].toLowerCase())&&movie.id !== selectedMovie.id);
    }

    render() {
        if (this.state.hasError){
            return (
                <div>There is some error</div>
            );
        }

        if (this.state.selectedMovie === null)
        {
            return (
                <div>
                    <div>
                        <SearchContainer onSearch={this.onSearch.bind(this)} filter={this.state.filter} onSwitchFilter={this.onSwitchFilter.bind(this)}/>
                    </div>
                    <div>
                        <MoviesResults list={this.state.list} sortType={this.state.sortType} onSwitchSortType={this.onSwitchSortType.bind(this)} onSelectMovie={this.onSelectMovie.bind(this)}/>
                    </div>
                </div>
            );            
        }

        return (
            <div>
                <BackToSearch onSelectMovie={this.onSelectMovie.bind(this)}/>
                <MoviePage selectedMovie={this.state.selectedMovie} moviesOfTheSameGenre={this.state.moviesOfTheSameGenre} onSelectMovie={this.onSelectMovie.bind(this)}/>
            </div>
        );
    }
}

export default MoviesContainer;