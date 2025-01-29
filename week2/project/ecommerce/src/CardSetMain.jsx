import React from 'react';
import Product from './Card.jsx';

const CardSetMain = ({ filterProducts }) => {
    return (
        <div className="card-set">
            {filterProducts.map((product, index) => (
                <Product key={index} 
                image={product.image} 
                title={product.title} 
                price={product.price} />
            ))}
        </div>
    )
};

export default CardSetMain;
