import '../../static/inline';
import '../../static/margin-left';

import React from 'react';

const MovieReleaseDate=({movie}) => (
    <div className="inline margin-left">{movie.release_date}</div>
);

export default MovieReleaseDate;