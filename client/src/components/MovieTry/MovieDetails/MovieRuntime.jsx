import '../../../static/inline';
import '../../../static/margin-left';
import React from 'react';

const MovieRuntime=({movie}) => (
    <div className="inline margin-left">{movie.runtime} min</div>
);

export default MovieRuntime;