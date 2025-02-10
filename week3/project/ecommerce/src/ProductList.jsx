import ProductCard from './ProductCard.jsx';

const ProductList = ({ filterProducts }) => {
    return (
        <div className="product-list">
            {filterProducts.map(({id, image, title}) => (
                <ProductCard
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                />
            ))}
        </div>
    );
};

export default ProductList;
