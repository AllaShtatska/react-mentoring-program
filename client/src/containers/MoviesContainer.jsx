import React from 'react';
import {connect} from 'react-redux';

import {errorHappened} from '../actions/errorHappened';
import {moviesFetchRequested} from '../actions/moviesFetchRequested';
import MoviesPageContainer from './MoviesPageContainer';
import MoviePageContainer from './MoviePageContainer';

import SEARCH_FILTER_TYPE from '../components/SearchFilter/searchFilterType';
import SORT_TYPE from '../components/Sort/sortType';


const mapStateToProps = (state) => ({
    filter:state.movies.filter,
    filterValue:state.movies.filterValue,
    sortType:state.movies.sortType,
    selectedMovie:state.movieDetails.selectedMovie,
    hasError:state.movies.hasError
});

const mapDispatchToProps = (dispatch) => ({
    errorHappened: ()=>{
        dispatch(errorHappened());
    },
    initialMoviesFetch: ()=>{
        dispatch(moviesFetchRequested(SEARCH_FILTER_TYPE.title, "", SORT_TYPE.releaseDate))
    }
});

class App extends React.Component{
    componentDidMount(){
        this.props.initialMoviesFetch();
    }

    componentDidCatch(error, info){
        this.props.errorHappened();
        console.log("I crashed: " + error +" "+info);
    }

    render() {
        if (this.props.hasError){
            return (
                <div>There is some error</div>
            );
        }

        if (this.props.selectedMovie == null)
        {
            return (<MoviesPageContainer filter={this.props.filter} sortType={this.props.sortType} filterValue={this.props.filterValue} />);
        }

        return (<MoviePageContainer/>);
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);