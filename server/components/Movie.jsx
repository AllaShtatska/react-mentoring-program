import movieStyles from "../static/movie.css";
import imageStyles from "../static/image.css";
import inlineStyles from "../static/inline.css";
import marginLeftStyles from "../static/margin-left.css";

import React from "react";

const className = inlineStyles.inline + " " + marginLeftStyles["margin-left"];

const Movie = ({ movie, onSelectMovie }) => (
  <div className={movieStyles.movie} onClick={() => onSelectMovie(movie)}>
    <div className={imageStyles.image}>
      <img src={movie.poster_path} />
    </div>
    <div className={inlineStyles.inline}>{movie.title}</div>
    <div className={className}>{movie.release_date}</div>
    <div>{movie.genres}</div>
  </div>
);

export default Movie;
