import '../../static/inline.css';
import '../../static/margin-left.css';
import React from 'react';

const MovieRuntime=({movie}) => (
    <div className="inline margin-left">{movie.runtime} min</div>
);

export default MovieRuntime;