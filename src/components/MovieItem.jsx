import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setFavorites } from '../actions';
import FavoriteItems from '../assets/icons/favorites-items.svg';
import NoFoundPoster from '../components/NoFoundPoster';

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
        <Link to={`/movie/${id}`}>
          {poster ? 
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} width="100%" height="100%"/>
            : <NoFoundPoster/>
          }
          
        </Link>
          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <Link onClick={handleSetFavorites}>
                  <img src={FavoriteItems} alt="add favorites"/>
                </Link>

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





