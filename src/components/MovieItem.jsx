import React from 'react';


const MovieItem = ({ poster, title, date }) => {
    return(
        <div className="col">
        <div className="card shadow-sm">
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} width="100%" height="100%"/>
        </div>
      </div>
    );
}

export default MovieItem;