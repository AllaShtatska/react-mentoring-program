import React from 'react';
import Movie from './Movie';

const MoviesList=({list, onSelectMovie}) => (
    <div>{list.map((movie)=><Movie key={movie.id} movie={movie} onSelectMovie={onSelectMovie}/>)}</div>
);

export default MoviesList;