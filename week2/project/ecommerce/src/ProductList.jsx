import ProductCard from './ProductCard.jsx';

const ProductList = ({ filterProducts }) => {
    return (
        <div className="product-list">
            {filterProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                />
            ))}
        </div>
    );
};

export default ProductList;
