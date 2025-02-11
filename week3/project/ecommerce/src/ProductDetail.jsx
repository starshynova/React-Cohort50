import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useFavorites} from './useFavorites.jsx';
import heartIconRegular from './assets/heart-regular.svg';
import heartIconSolid from './assets/heart-solid.svg';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError('Error fetching product')
                console.error(error)
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const isFavorite = favorites.includes(id);

    return (
        <div>
            <h1>{product.title}</h1>
            <div className="product-card">
                <p>{product.description}</p>
                <img className="product-image" src={product.image} alt={product.title} />
                <div className="favorite-icon" onClick={() => toggleFavorite(id)}>
                <img src={isFavorite ? heartIconSolid : heartIconRegular} alt="favorite" />
            </div>
            </div>
            
        </div>
    );
};

export default ProductDetail;
