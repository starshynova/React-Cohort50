import React from 'react';
import {useState} from 'react';
import './component.css';

const InputField = ({ onInputChange }) => {
    return (
        <input className="input-field"
            type="text"
            onChange={(e) => onInputChange(e.target.value)}
        />
    );
   

/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

    return (
        <div>
            <input className="input-field" type="text" />
        </div>
    ) */
}

export default InputField;