import React, { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (id) => {
//     setFavorites((prevFavorites) =>
//         prevFavorites.includes(id)
//             ? prevFavorites.filter((favoriteId) => favoriteId !== id) // remove from Favorites
//             : [...prevFavorites, id] // add to Favorites
//     );
// };

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

// export const useFavorites = () => useContext(FavoriteContext);

