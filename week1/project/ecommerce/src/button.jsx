import React from 'react';

// const setFilterProducts = (buttonName) => {
//     allProducts.filter(product => product.category === buttonName.replace(/^FAKE:\s*/, ''));
//     console.log(setFilterProducts);
//     };

const Button = ({ buttonName, setFilterProducts }) => {
    
    return (
        <button onClick={() => setFilterProducts(buttonName)}>{buttonName}</button>
    );
};

export default Button;