import '../../static/inline.css';

import React from 'react';

const MovieReleaseDate=({movie}) => (
    <div className="inline">{movie.release_date}</div>
);

export default MovieReleaseDate;