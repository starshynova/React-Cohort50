import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext.jsx';

export const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const toggleFavorite = (productId) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(fav => fav !== productId) 
      : [...favorites, productId]; 

    setFavorites(newFavorites); 
  };

  return { favorites, toggleFavorite };
};
