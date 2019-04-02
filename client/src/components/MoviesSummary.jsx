import '../static/inline.css';

import React from 'react';

class MoviesSummary extends React.Component{
    render(){
        return(
            <div className="inline">{this.props.count} movie(s) found</div>
        );
    }
}

export default MoviesSummary;
