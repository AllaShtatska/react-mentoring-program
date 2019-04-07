import '../../static/image.css';

import React from 'react';

const MovieImage=({movie}) => (
    <div className='image'><img src={movie.poster_path}/></div>
);

export default MovieImage;