import '../static/inline.css';
import '../static/margin-left.css';

import React from 'react';

class MovieDetails extends React.Component {
    render(){
        return(
            <div>
                <div className='inline'><img src={this.props.selectedMovie.poster_path}/></div>
                <div className="inline">
                    <div className="inline">{this.props.selectedMovie.title}</div>
                    <div className="inline margin-left">{this.props.selectedMovie.vote_average}</div>
                    <div>{this.props.selectedMovie.genres}</div>
                    <div className="inline">{this.props.selectedMovie.release_date}</div>
                    <div className="inline margin-left">{this.props.selectedMovie.runtime} min</div>
                    <div>{this.props.selectedMovie.overview}</div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;