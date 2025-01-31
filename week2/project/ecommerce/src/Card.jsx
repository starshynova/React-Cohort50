import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, title }) => {
    return (
        <div className="card">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="image-button" />
            </Link>
            <h2>{title}</h2>
        </div>
    );
};

export default Card;
