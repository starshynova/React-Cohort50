import React from 'react';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import InputField from './InputField.jsx';
import Button from './Button.jsx';
import useGenerateExample from './useGenerateExample.jsx';


const QuestionPage = () => {
  
    const { operation } = useParams();
    const { example, result, formula, generateNewExample } = useGenerateExample(operation);
    const [userAnswer, setUserAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
    const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);


const handleInputChange = (value) => {
    setUserAnswer(value);
};

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
            <p>Right answer is {result}</p>
            <p>Count of the correct answers: {countCorrectAnswer}</p>
            <p>Count of the incorrect answers: {countIncorrectAnswer}</p>
        </div>
    );
};

export default QuestionPage;