import React from "react";

const AnswerButton = ({ onButtonClick }) => {
    return (
        <button className="answer-button" onClick={onButtonClick}>
            Check Answer
        </button>
    );
};
export default AnswerButton;