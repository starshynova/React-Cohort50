import React from 'react';
import { useState, useEffect } from "react";
import { parse } from "mathjs";
import { randomNumber, checkSubtraction } from "../randomNumbers.js";
import { getData } from "../getData.js";

const useGenerateExample = (operation) => {
    // const [dataOperation, setDataOperation] = useState("");
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
        let newValues = {}; 

        if (operation === 'addition') {
            newValues = {
                a: randomNumber(1, 100),
                b: randomNumber(1, 100),
            };
        } else if (operation === 'division') {
            newValues = {
                b: randomNumber(1, 10), 
            };
            newValues.a = newValues.b * randomNumber(1, 10); // Гарантируем, что a делится на b
        } else if (operation === 'subtraction') {
            newValues = checkSubtraction(randomNumber(1, 100), randomNumber(1, 100));
            // let tempValues = {
            //     a: randomNumber(1, 100),
            //     b: randomNumber(1, 100),
            // };
            // newValues = checkSubtraction(tempValues);
        } else if (operation === 'multiplication') {
            newValues = {
                a: randomNumber(1, 10),
                b: randomNumber(1, 10),
            };
        } else {
            console.error("Unknown operation:", operation);
            return;
        }

        setValues(newValues);

        const formulaNumbers = formula.replace(/a/g, newValues.a).replace(/b/g, newValues.b);
        setExample(formulaNumbers);

        const f = parse(formula);
        const evaluatedResult = f.evaluate(newValues);
        setResult(evaluatedResult);
}

    useEffect(() => {
        if (formula) {
            generateNewExample();
        }
    }, [formula]);

    return { example, result, generateNewExample }
}

export default useGenerateExample;
