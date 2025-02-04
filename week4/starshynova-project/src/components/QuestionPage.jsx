import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../getData.js';
import { randomNumber } from '../randomNumbers.js';
import { simplify, parse, derivative } from 'mathjs';
import InputField from './InputField.jsx';

const values = 
{a: randomNumber(1, 100),
 b: randomNumber(1, 100)}

const QuestionPage = () => {
    const {operation} = useParams();
    const [formula, setFormula] = useState("");
    const [example, setExample] = useState("");
    const [result, setResult] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
  
    useEffect(() => {
    const fetchFormula = async () => {
        const result = await getData();
        const question = result.find((question) => question.operation === operation);
        if (question) {
            setFormula(question.formula);
        } else {
            setFormula("Formula not found");
        }
    }
        fetchFormula();
    }, [operation]);

    useEffect(() => {
        const formulaNumbers = formula.replace(/a/g, values.a).replace(/b/g, values.b);
        setExample(formulaNumbers);
    }, [formula])


    useEffect(() => {
        const f = parse(formula);
        const evaluatedResult = f.evaluate(values);
        setResult(evaluatedResult);
}, [example]);

// const UsersAnswer = () => {
//     const [value, setValue] = useState("");

//      const handleInputChange = (value) => {
//         setValue(value);
//     };
    
//         return (
//             <InputField onInputChange={handleInputChange} />
//         )
//     }

const handleInputChange = (value) => {
    setUserAnswer(value);
};

useEffect(() => {
    if (userAnswer !== "" && Number(userAnswer) === result) {
        alert("Your answer is correct!");
    }
}, [userAnswer, result]);

    // if (UsersAnswer === result) {
    //     alert("Your answer is correct!");

    // } else {
    //     alert("Try again!");
    // }

    return (
        <div>
            <h1>{operation}</h1>
            <p>{formula}</p>
            <p>{example}</p>
            <InputField onInputChange={handleInputChange} />
            <p>Правильный ответ: {result}</p>
        </div>
    );
};

export default QuestionPage;