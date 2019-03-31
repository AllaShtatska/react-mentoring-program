import '../../../static/movie';

import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';
import MovieReleaseDate from './MovieReleaseDate';
import MovieGenre from './MovieGenre'

const Movie=({movie, onSelectMovie}) => (
    <div className='movie' onClick={()=>onSelectMovie(movie)}><MovieImage movie={movie}/><MovieTitle movie={movie}/><MovieReleaseDate movie={movie}/><MovieGenre movie={movie}/></div>
);

export default Movie;