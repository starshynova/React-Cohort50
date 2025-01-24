import React from 'react';

const Button = (props) => {
    const { setCount, count } = props;
    return (
        <button onClick={() => setCount(count+1)}>Add 1!</button>
    );
};

export default Button;