import React, { useState, useEffect } from 'react';
import { useCount } from './useCount.jsx';
import { Link } from 'react-router-dom';
import Button from './Button.jsx'

const ResultPage = () => {
    const [advice, setAdvice] = useState('');
    const { countCorrectAnswer, countIncorrectAnswer, setCountCorrectAnswer, setCountIncorrectAnswer } = useCount();

    useEffect(() => {
        function adviceForUser() {
            let totalAnswers = countCorrectAnswer + countIncorrectAnswer;
            if (totalAnswers === 0) return;
            let generalResult = (countCorrectAnswer / totalAnswers) * 100;

            if (generalResult >= 80) {
                setAdvice("Congratulations! You are very good at math!");
            } else if (generalResult > 50 && generalResult < 80) {
                setAdvice("You are on the right way, but you need some practice.");
            } else {
                setAdvice("Your result is not so good... You need more practice!");
            }
        }

        adviceForUser();
        
    }, [countCorrectAnswer, countIncorrectAnswer]);

    // const goToMainPage = () => {
    //         // setCountCorrectAnswer(0);
    //         // setCountIncorrectAnswer(0);
    //         resetCounts();
    // };

    useEffect(() => {
        setCountCorrectAnswer(0);
        setCountIncorrectAnswer(0);
    }, [setCountCorrectAnswer, setCountIncorrectAnswer]);

    return (
        <>
            <h1>Your score is</h1>
            <p>Correct answers: {countCorrectAnswer}</p>
            <p>Incorrect answers: {countIncorrectAnswer}</p>
            <h2>{advice}</h2>
            <Link to={'/'}>
                {/* <button className="question-section" onClick={goToMainPage}>
                    Go to the main page</button> */}
                <Button title="Main Page"  />
            </Link>
        </>
    );
};

export default ResultPage;
