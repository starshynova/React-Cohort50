import React from 'react';
import { Link } from 'react-router-dom';
import heartIconRegular from '../assets/heart-regular.svg';
import heartIconSolid from '../assets/heart-solid.svg';
import {useFavorites} from '../hooks/useFavorites.jsx';


const ProductCard = ({ id, image, title }) => {
    const { favorites, toggleFavorite } = useFavorites();

    const productId = Number(id); 
    const isFavorite = favorites.includes(productId);

    return (
        <div className="card">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="image-button" />
            </Link>
            <div className="favorite-icon" onClick={() => toggleFavorite(productId)}>
                <img src={isFavorite ? heartIconSolid : heartIconRegular}/>
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default ProductCard;
