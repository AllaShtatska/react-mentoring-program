import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {search} from '../actions/search';
import {switchFilter} from '../actions/switchFilter';
import {switchSortType} from '../actions/switchSortType';
import {moviesFetchRequested} from '../actions/moviesFetchRequested';

import MoviesPage from '../components/MoviesPage';

import {getFilterPart, getSortPart} from '../common/queryUtils';

const mapStateToProps = (state) => ({
    list:state.movies.list,
    filterType:state.movies.filter,
    sortType:state.movies.sortType,
    selectedMovie:state.movieDetails.selectedMovie
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchSortType: (sortType)=>{
        dispatch(switchSortType(sortType));
        dispatch(moviesFetchRequested(getFilterPart(ownProps.filterType, ownProps.filterValue)+getSortPart(sortType)));
    },
    switchFilter:filter=>{
        dispatch(switchFilter(filter));
    },
    search: filterValue=>{
        dispatch(search(filterValue));
    }
});

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(MoviesPage));
