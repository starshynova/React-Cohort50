import React from 'react';
import { useContext } from 'react';
import {FavoriteContext} from './FavoriteContext';
import ProductList from './ProductList';
import Header from './Header';

const FavoritePage = () => {
    const {favorite, removeFromFavorite} = useContext(FavoriteContext);

    return (
        <div>
             <Header title="Favorites" />
            {favorite.length === 0 ? <p>You do not have any favorite items yet</p> : (
                <ProductList filterProducts={favorite} />
                        // <>
        //   <ul>
        //     {favorite.map((item) => (
        //       <li key={item.id}>
        //         <ProductCard />
        //       </li>
        //     ))}
        //   </ul>
        // </>
      )}
        </div>
    )
}

export default FavoritePage;