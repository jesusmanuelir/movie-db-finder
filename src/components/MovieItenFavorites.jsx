import React from 'react';
import { Link } from 'react-router-dom';
import { deleteFavorites } from '../actions';
import { connect } from 'react-redux';

const MovieItenFavorites = (props) => {
    
    const {id, poster, title, description, date, isList} = props;
    const handleDeleteFavorites = (itemId) => {
      props.deleteFavorites(itemId);
    }

    return(
    
            <div className="card mb-2" >
            <div className="row no-gutters">
              <div className="col-md-2 img-favorites_max_width">
              <img src={`https://image.tmdb.org/t/p/w500${poster}`} width="133px" height="200px"/>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title title-item_favorites">{title}</h5>
                  <p className="card-text description-item_favorites">{description}</p>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteFavorites(id)}>Delete</button>&nbsp;
                  <Link to={`/movie/${id}`}>
                  <button className="btn btn-outline-primary btn-sm" >View</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        );
}



const mapDispatchToProps = {
  deleteFavorites
}

export default connect('',mapDispatchToProps)(MovieItenFavorites)



