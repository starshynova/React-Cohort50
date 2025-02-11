import { useContext } from 'react';
import { FavoriteContext } from './FavoriteContext.jsx';

export const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const toggleFavorite = (id) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id) 
      : [...favorites, id]; 

    setFavorites(newFavorites); 
  };

  return { favorites, toggleFavorite };
};
