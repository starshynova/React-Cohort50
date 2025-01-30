import React from 'react';
import Product from './Card.jsx';

const CardSetMain = ({ fetchDefaultCard }) => {
    return (
        <div className="card-set">
            {fetchDefaultCard.map((product, index) => (
                <Product key={index} 
                image={product.image} 
                title={product.title} />
            ))}
        </div>
    )
};

export default CardSetMain;
