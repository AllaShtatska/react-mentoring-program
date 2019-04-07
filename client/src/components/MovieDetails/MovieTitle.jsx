import '../../static/inline.css';
import React from 'react';

const MovieTitle=({movie}) => (
    <div className="inline">{movie.title}</div>
);

export default MovieTitle;