import { useParams, useNavigate } from 'react-router-dom';
import {useFavorites} from '../hooks/useFavorites.jsx';
import heartIconRegular from '../assets/heart-regular.svg';
import heartIconSolid from '../assets/heart-solid.svg';
import Header from '../components/Header.jsx';
import useFetch from '../hooks/useFetch.jsx';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { favorites, toggleFavorite } = useFavorites();

    const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

    const resetFilter = () => {
        navigate('/');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const productId = Number(id);
    const isFavorite = favorites.includes(productId);

    return (
        <div>
            <Header title={product.title} resetFilter={resetFilter} />
            <div className="product-card">
                <p>{product.description}</p>
                <img className="product-image" src={product.image} alt={product.title} />
                <div className="favorite-icon" onClick={() => toggleFavorite(productId)}>
                <img src={isFavorite ? heartIconSolid : heartIconRegular}/>
            </div>
            </div>
            
        </div>
    );
};

export default ProductDetail;
