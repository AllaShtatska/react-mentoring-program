import '../../../static/inline';
import '../../../static/margin-left';
import React from 'react';

const MovieRating=({movie}) => (
    <div className="inline margin-left">{movie.vote_average}</div>
);

export default MovieRating;