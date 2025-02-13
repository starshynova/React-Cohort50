import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../getData.js';
import { randomNumber, checkSubtraction } from '../randomNumbers.js';
import { simplify, parse, derivative } from 'mathjs';
import InputField from './InputField.jsx';
import Button from './Button.jsx';
import useGenerateExample from './useGenerateExample.jsx';

const values = 
{a: randomNumber(1, 100),
 b: randomNumber(1, 100)}

const QuestionPage = () => {
    // const {operation} = useParams();
    // const [formula, setFormula] = useState("");
    // const [example, setExample] = useState("");
    // const [result, setResult] = useState("");
    // const [userAnswer, setUserAnswer] = useState("");
    // const [correctAnswer, setCorrectAnswer] = useState("");
    // const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
    // const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);
  
    const { operation } = useParams();
    const { example, result, formula, generateNewExample } = useGenerateExample(operation);
    const [userAnswer, setUserAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
    const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);

//     useEffect(() => {
//     const fetchFormula = async () => {
//         const result = await getData();
//         const question = result.find((question) => question.operation === operation);
//         if (question) {
//             setFormula(question.formula);
//         } else {
//             setFormula("Formula not found");
//         }
//     }
//         fetchFormula();
//     }, [operation]);

//     useEffect(() => {
//         const formulaNumbers = formula.replace(/a/g, values.a).replace(/b/g, values.b);
//         setExample(formulaNumbers);
//     }, [formula])


//     useEffect(() => {
//         const f = parse(formula);
//         const evaluatedResult = f.evaluate(values);
//         setResult(evaluatedResult);
// }, [example]);

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

// useEffect(() => {
//     if (userAnswer !== "" && Number(userAnswer) === result) {
//         setCountCorrectAnswer(countCorrectAnswer + 1);
//         console.log(countCorrectAnswer);
//     } else {
//         setCountIncorrectAnswer(countIncorrectAnswer + 1);
//         console.log(countIncorrectAnswer)
//     }
// }, [userAnswer, result]);

    // if (UsersAnswer === result) {
    //     alert("Your answer is correct!");

    // } else {
    //     alert("Try again!");
    // }

    

    const checkAnswer = () => {
        if (Number(userAnswer) === result) {
          setCorrectAnswer("Your answer is correct!");
          setCountCorrectAnswer((prev) => prev + 1);
        } else {
          setCorrectAnswer("Try again!");
          setCountIncorrectAnswer((prev) => prev + 1);
        }
        setUserAnswer("");
      };

      const nextExample = () => {
        generateNewExample();
        // setUserAnswer('');
      }


    return (
        <div>
            <h1>{operation}</h1>
            <p>{formula}</p>
            <p>{example}</p>
            <div className="answer-block">
                <InputField onInputChange={handleInputChange} userAnswer={userAnswer} />
                <Button onButtonClick={checkAnswer} title="Check answer"/>
                <Button onButtonClick={nextExample} title="Next example"/>
            </div>
            <p>{correctAnswer}</p>
            <p>Правильный ответ: {result}</p>
            <p>Верных ответов: {countCorrectAnswer}</p>
            <p>Неверных ответов: {countIncorrectAnswer}</p>
        </div>
    );
};

export default QuestionPage;