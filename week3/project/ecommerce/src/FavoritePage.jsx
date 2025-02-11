import React from 'react';
// import {useFavorites} from './FavoriteContext';
import Header from './Header';
import ProductCard from './ProductCard';
import { useFavorites } from './useFavorites.jsx';


const FavoritePage = ({ allProducts }) => {
    const { favorites } = useFavorites();
    
    const favoriteProducts = allProducts.filter((product) => favorites.includes(product.id));

return (
    <div>
        <Header title="Favorites" />
            <div className='product-list'>
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <p>You do not have any favorite items yet</p>
                )}
            </div>
        </div>
    )
}


export default FavoritePage;
