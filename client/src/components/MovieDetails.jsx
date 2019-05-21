import inlineStyles from "../static/inline.css";
import marginLeftStyles from "../static/margin-left.css";

import React from "react";

const className = inlineStyles.inline + " " + marginLeftStyles["margin-left"];

class MovieDetails extends React.Component {
  render() {
    return (
      <div>
        <div className={inlineStyles.inline}>
          <img src={this.props.selectedMovie.poster_path} />
        </div>
        <div className={inlineStyles.inline}>
          <div className={inlineStyles.inline}>
            {this.props.selectedMovie.title}
          </div>
          <div className={className}>
            {this.props.selectedMovie.vote_average}
          </div>
          <div>{this.props.selectedMovie.genres}</div>
          <div className={inlineStyles.inline}>
            {this.props.selectedMovie.release_date}
          </div>
          <div className={className}>
            {this.props.selectedMovie.runtime} min
          </div>
          <div>{this.props.selectedMovie.overview}</div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
