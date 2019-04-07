import '../../static/image.css';

import React from 'react';

const MovieCover=({movie}) => (
    <div className='inline'><img src={movie.poster_path}/></div>
);

export default MovieCover;