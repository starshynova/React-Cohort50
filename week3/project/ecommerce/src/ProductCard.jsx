import React from 'react';
import { Link } from 'react-router-dom';
import heartIcon from './assets/heart-regular.svg';

const ProductCard = ({ id, image, title }) => {
    return (
        <div className="card">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="image-button" />
            </Link>
            <div className="favorite-icon">
                <img src={heartIcon} />
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default ProductCard;
