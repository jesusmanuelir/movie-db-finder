const reducer = (state, action) => {
    switch(action.type){
      case 'SET_FAVORITE':
        return {
        ...state,
        favorites: [...state.favorites, action.payload]
      } 
      case 'DELETE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(favorite => favorite.id != action.payload)
        }
      default:
        return state;
    }
}

export default reducer;

