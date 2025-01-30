import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';

const ButtonSet = ({ setFilterProducts }) => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data); 
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="button-set">
            {categories.map((category, index) => (
                <Button
                    key={index}
                    buttonName={category}
                    setFilterProducts={setFilterProducts}
                />
            ))}
        </div>
    );
};

export default ButtonSet;
