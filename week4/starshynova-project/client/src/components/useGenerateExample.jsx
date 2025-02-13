import React from 'react';
import { useState, useEffect } from "react";
import { parse } from "mathjs";
import { randomNumber, checkSubtraction } from "../randomNumbers.js";
import { getData } from "../getData.js";

const useGenerateExample = (operation) => {
    const [formula, setFormula] = useState("");
    const [example, setExample] = useState("");
    const [result, setResult] = useState("");
    const [values, setValues] = useState({ a: 0, b: 0 });

    useEffect(() => {
        const fetchFormula = async () => {
            const data = await getData();
            const question = data.find((q) => q.operation === operation);
            if (question) {
                setFormula(question.formula);
            } else {
                setFormula("Formula not found");
            }
        };
        fetchFormula();
    }, [operation]);

    const generateNewExample = () => {
        // if (operation === 'multiplication') {}
        let newValues = {
            a: randomNumber(1, 100),
            b: randomNumber(1, 100),
        };

    
       
    
        if (operation === 'subtraction') {
            checkSubtraction();
            newValues = checkSubtraction(newValues.a, newValues.b);
        }
        

        setValues(newValues);

        const formulaNumbers = formula.replace(/a/g, newValues.a).replace(/b/g, newValues.b);
        setExample(formulaNumbers);

        const f = parse(formula);
        const evaluatedResult = f.evaluate(newValues);
        setResult(evaluatedResult);
    };

    useEffect(() => {
        if (formula) {
            generateNewExample();
        }
    }, [formula]);

    return { example, result, generateNewExample }
}

export default useGenerateExample;
