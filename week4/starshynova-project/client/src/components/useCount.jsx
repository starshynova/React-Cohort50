import { useContext } from 'react';
import { CountContext } from './CountContext.jsx';

export const useCount = () => {
  const { countCorrectAnswer, setCountCorrectAnswer } = useContext(CountContext);
  const { countIncorrectAnswer, setCountIncorrectAnswer } = useContext(CountContext);
  const { correctAnswer, setCorrectAnswer } = useContext(CountContext);

  const answerCalculation = (userAnswer, result) => {
    if (Number(userAnswer) === result) {
        setCorrectAnswer("Your answer is correct!");
        setCountCorrectAnswer((prev) => prev + 1);
    } else {
        setCorrectAnswer("Try again!");
        setCountIncorrectAnswer((prev) => prev + 1);
    }
  };

  return { countCorrectAnswer, countIncorrectAnswer, correctAnswer, answerCalculation };
};