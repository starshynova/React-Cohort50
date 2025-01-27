import React from 'react';
import allProducts from './fake-data/all-products';
import filterProducts from './ButtonSet';

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