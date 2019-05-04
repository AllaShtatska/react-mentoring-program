import '../static/movie.css';
import '../static/image.css';
import '../static/inline.css';
import '../static/margin-left.css';

import React from 'react';

const Movie=({movie, onSelectMovie}) => (
    <div className='movie' onClick={()=>onSelectMovie(movie)}>
    <div className='image'><img src={movie.poster_path}/></div>
    <div className="inline">{movie.title}</div>
    <div className="inline margin-left">{movie.release_date}</div>
    <div>{movie.genres}</div>
    </div>
);

export default Movie;