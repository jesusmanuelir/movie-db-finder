import React from 'react';
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
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">{date}</small></p>
                  <button onClick={() => handleDeleteFavorites(id)}>Delete</button>
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






