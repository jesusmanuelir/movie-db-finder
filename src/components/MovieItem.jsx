import React from 'react';

const MovieItem = () => {
    return(
        <div className="col">
        <div className="card shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div className="card-body">
            <p className="card-text"><strong>Title Movie</strong></p>
            <p className="card-text">05 september 2020</p>

          </div>
        </div>
      </div>
    );
}

export default MovieItem;