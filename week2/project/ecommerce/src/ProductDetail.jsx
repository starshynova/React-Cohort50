import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
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

export default ProductDetail;
