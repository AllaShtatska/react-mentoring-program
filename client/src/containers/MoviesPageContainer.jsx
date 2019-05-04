import {connect} from 'react-redux';

import {search} from '../actions/search';
import {switchFilter} from '../actions/switchFilter';
import {switchSortType} from '../actions/switchSortType';
import {setSelectedMovie} from '../actions/setSelectedMovie';
import {moviesFetchRequested} from '../actions/moviesFetchRequested';
import {moviesOfTheSameGenreFetchRequested} from '../actions/moviesOfTheSameGenreFetchRequested';

import MoviesPage from '../components/MoviesPage';

const mapStateToProps = (state) => ({
    list:state.movies.list,
    filterType:state.movies.filter,
    sortType:state.movies.sortType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchSortType: (sortType)=>{
        dispatch(switchSortType(sortType));
        dispatch(moviesFetchRequested(ownProps.filter, ownProps.filterValue, sortType));
    },
    selectMovie: movie => 
    {
        dispatch(setSelectedMovie(movie));
        if (movie !== null)
        {
            dispatch(moviesOfTheSameGenreFetchRequested(movie.genres));
        }
    },
    switchFilter:filter=>{
        dispatch(switchFilter(filter));
    },
    search: filterValue=>{
        dispatch(search(filterValue));
        dispatch(moviesFetchRequested(ownProps.filter, filterValue, ownProps.sortType));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(MoviesPage);
