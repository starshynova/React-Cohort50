import React from 'react';
import Card from './Card.jsx';

const CardSetMain = ({ filterProducts }) => {
    return (
        <div className="card-set">
            {filterProducts.map((product) => (
                <Card
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                />
            ))}
        </div>
    );
};

export default CardSetMain;
