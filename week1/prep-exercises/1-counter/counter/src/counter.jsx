import React, {useState} from 'react';
import Count from './count.jsx';
import Button from './button.jsx';

const Counter = () => {
    const [count, setCount] = useState(0);

    const feedback = () => {
        return count > 10 ? "It's higher than 10!"
        : "Keep counting..."
        };
    
        return (<div>
            <div><Count countNumber = {count}/></div>
            <div><Button setCount={setCount} count={count} /></div>
        <div>
            <h1>{feedback()}</h1>
        </div>
        </div>
    );
    };

    export default Counter;
