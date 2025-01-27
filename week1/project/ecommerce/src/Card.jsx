const Product = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.price}</p>
        </div>
    )
};

export default Product;