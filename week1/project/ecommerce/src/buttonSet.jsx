import React from 'react';
import Button from './button.jsx';
import allCategories from './fake-data/all-categories.js';

// function buttons () {
//     allCategories.forEach(category => {
//         return <Button buttonName={category} />
//     })
// }

const ButtonSet = () => {
    return (
        <div>
           {allCategories.map((category, index) => (
            <Button key={index} buttonName={category} />
         ))}
        </div>
    )
}

export default ButtonSet;