import ProductCard from './ProductCard.jsx';

const CardSetMain = ({ filterProducts }) => {
    return (
        <div className="card-set">
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

export default CardSetMain;
