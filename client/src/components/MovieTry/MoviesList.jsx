import React from 'react';
import Movie from './Movie/Movie';

const MoviesList=({list, onSelectMovie}) => (
    <div>{list.map((movie)=><Movie key={movie.id} movie={movie} onSelectMovie={onSelectMovie}/>)}</div>
);

export default MoviesList;

//ReactDOM.render(<MoviesList list={movies.data}/>, document.getElementById('root'));