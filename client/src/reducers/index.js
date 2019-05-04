import {combineReducers} from 'redux';

import movies from './movies';
import movieDetails from './movieDetails';

export default combineReducers({
    movies,
    movieDetails
});