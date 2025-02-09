import React, { useState, useEffect } from 'react';

const CategoryList = ({ setFilterProducts }) => {
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
                <button 
                    key={index} 
                    onClick={() => setFilterProducts(category)} >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
