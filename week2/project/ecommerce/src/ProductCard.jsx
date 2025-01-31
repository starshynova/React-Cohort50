import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductCard = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <div className="product-card">
                <p>{product.description}</p>
                <img className="product-image" src={product.image} alt={product.title} />
            </div>
        </div>
    );
};

export default ProductCard;
