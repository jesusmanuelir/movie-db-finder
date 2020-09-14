import React from 'react';
import { connect } from 'react-redux';
import { setFavorites } from '../actions';
const MovieItem = (props) => {
  const { id, poster, vote_average, title, description, date } = props;
  const handleSetFavorites = () => {
    props.setFavorites({
      id,
      poster,
      vote_average,
      date,
      title,
      description
    })
  }


    return(
        <div className="col">
        <div className="card shadow-sm">
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} width="100%" height="100%"/>
          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" onClick={handleSetFavorites} className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </div>
                <small className="text-muted">{vote_average} Vote Average</small>
              </div>
          </div>
        </div>
      </div>
      
    );
}


const mapDispatchToProps = {
  setFavorites
}

export default connect(null, mapDispatchToProps)(MovieItem);





