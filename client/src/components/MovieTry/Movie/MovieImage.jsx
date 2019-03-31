import '../../../static/image';

import React from 'react';

const MovieImage=({movie}) => (
    <div className='image'><img src={movie.poster_path}/></div>
);

export default MovieImage;