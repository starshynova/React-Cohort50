import React from 'react';
import Button from './Button.jsx';
import allCategories from './fake-data/all-categories.js';


const ButtonSet = ({ setFilterCards }) => {
    return (
        <div className="button-set">
           {allCategories.map((category, index) => (
            <Button key={index} buttonName={category.replace(/^FAKE:\s*/, '')} setFilterCards={setFilterCards} />
         ))}
        </div>
    )
}

export default ButtonSet;