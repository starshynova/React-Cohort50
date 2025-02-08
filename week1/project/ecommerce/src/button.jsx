
const Button = ({ buttonName, setFilterCards }) => {
    
    return (
        <button onClick={() => setFilterCards(buttonName)}>{buttonName}</button>
    );
};

export default Button;