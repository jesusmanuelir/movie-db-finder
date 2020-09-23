import React from 'react';
import Main from '../components/Main';
import MovieItenFavorites from '../components/MovieItenFavorites'
import { connect } from 'react-redux';

const Favorites = ({favorites}) => {
    

    return(
        <Main>
        <h2 className="mb-2">Movies Favorites</h2>
        <ul className="list-group">
        {favorites.map((favorite) => {
          console.log(favorites.length)
          return favorites.length != 0  ?
                <MovieItenFavorites 
                key={favorite.id}
                {...favorite}
                isList
                />
              : <h5 className="mb-2">No results found</h5>
                
        })} 
        </ul>
        
        </Main>
    );
}

const initialStateTrending = state => {
  return{
    favorites: state.favorites,
  };
};



export default connect(initialStateTrending, '')(Favorites)






