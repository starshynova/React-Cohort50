import React from 'react';

const Button = ({ buttonName, setFilterProducts }) => {
    
    return (
        <button onClick={() => setFilterProducts(buttonName)}>{buttonName}</button>
    );
};

export default Button;