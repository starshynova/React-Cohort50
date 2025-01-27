import React from 'react';
import Button from './Button.jsx';
import allCategories from './fake-data/all-categories.js';


const ButtonSet = ({ setFilterProducts }) => {
    return (
        <div className="button-set">
           {allCategories.map((category, index) => (
            <Button key={index} buttonName={category} setFilterProducts={setFilterProducts} />
         ))}
        </div>
    )
}

export default ButtonSet;