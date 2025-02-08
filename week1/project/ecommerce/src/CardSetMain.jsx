import React from 'react';
import Card from './Card.jsx';

const CardSetMain = ({ filterCards }) => {
    return (
        <div className="card-set">
            {filterCards.map((card, index) => (
                <Card key={index} 
                image={card.image} 
                title={card.title} 
                price={card.price} />
            ))}
        </div>
    )
};

export default CardSetMain;
