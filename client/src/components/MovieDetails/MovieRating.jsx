import '../../static/inline.css';
import '../../static/margin-left.css';
import React from 'react';

const MovieRating=({movie}) => (
    <div className="inline margin-left">{movie.vote_average}</div>
);

export default MovieRating;