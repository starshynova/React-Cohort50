import React from 'react';
import { useState, useEffect } from "react";
import { parse } from "mathjs";
import { randomNumber } from "../randomNumbers.js";
import { getData } from "../getData.js";

const useGenerateExample = (operation) => {
    const [dataOperation, setDataOperation] = useState("");
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
                setDataOperation(question);
            } else {
                setFormula("Data not found");
            }
        };
        fetchFormula();
    }, [operation]);

    const generateNewExample = () => {
        const processValues = ({ values, checkFunction }) => {
            let a, b;
            if (typeof values.a.min === "string") {
                b = randomNumber(values.b.min, values.b.max);
                a = eval(values.a.min.replace(/b/g, b)); // Convert the string into an expression
            } else {
                a = randomNumber(values.a.min, values.a.max);
                b = randomNumber(values.b.min, values.b.max);
            }
        
            if (checkFunction) {
                try {
                    const checkFunc = new Function("b", "randomNumber", checkFunction);
                    const checkedValues = checkFunc(b, randomNumber);
                    a = checkedValues.a;
                    b = checkedValues.b;
                } catch (error) {
                    console.error("Error in checkFunction:", error);
                }
            }
        
            return { a, b };
        };

        const newValues = processValues(dataOperation);
        setValues(newValues);

        const formulaNumbers = dataOperation.formula.replace(/a/g, newValues.a).replace(/b/g, newValues.b);
        setExample(formulaNumbers);

        const f = parse(dataOperation.formula);
        const evaluatedResult = f.evaluate(newValues);
        setResult(evaluatedResult);
}

    useEffect(() => {
        if (dataOperation) {
            generateNewExample();
        }
    }, [dataOperation]);

    return { example, result, generateNewExample }
}

export default useGenerateExample;
