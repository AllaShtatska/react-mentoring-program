import '../../static/inline.css';
import '../../static/margin-left.css';

import React from 'react';

const MovieReleaseDate=({movie}) => (
    <div className="inline margin-left">{movie.release_date}</div>
);

export default MovieReleaseDate;