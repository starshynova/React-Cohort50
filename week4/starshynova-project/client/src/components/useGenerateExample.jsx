import React from 'react';
import { useState, useEffect } from "react";
import { parse } from "mathjs";
import { randomNumber, checkSubtraction } from "../randomNumbers.js";
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
        // let newValues = {}; 


        // const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        // const processValues = (operationData) => {
        //     let { values, checkFunction } = operationData;
        const processValues = ({ values, checkFunction }) => {
            let a, b;
        
            // Проверяем, если min/max заданы строками, вычисляем их
            if (typeof values.a.min === "string") {
                b = randomNumber(values.b.min, values.b.max);
                a = eval(values.a.min.replace(/b/g, b)); // Преобразуем строку в выражение
            } else {
                a = randomNumber(values.a.min, values.a.max);
                b = randomNumber(values.b.min, values.b.max);
            }
        
            // Если есть checkFunction, выполняем её
            if (checkFunction) {
                // const checkedValues = eval(checkFunction);
                // a = checkedValues.a;
                // b = checkedValues.b;

                try {
                    const checkFunc = new Function("b", "randomNumber", checkFunction);
                    const checkedValues = checkFunc(b, randomNumber);
                    a = checkedValues.a;
                    b = checkedValues.b;
                } catch (error) {
                    console.error("Ошибка в checkFunction:", error);
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
        
        // dataOperation.forEach((item) => {
        //     const { a, b } = processValues(item);
        // });



        // if (operation === 'addition') {
        //     newValues = {
        //         a: randomNumber(1, 100),
        //         b: randomNumber(1, 100),
        //     };
        // } else if (operation === 'division') {
        //     newValues = {
        //         b: randomNumber(1, 10), 
        //     };
        //     newValues.a = newValues.b * randomNumber(1, 10); 
        // } else if (operation === 'subtraction') {
        //     newValues = checkSubtraction(randomNumber(1, 100), randomNumber(1, 100));
        // } else if (operation === 'multiplication') {
        //     newValues = {
        //         a: randomNumber(1, 10),
        //         b: randomNumber(1, 10),
        //     };
        // } else {
        //     console.error("Unknown operation:", operation);
        //     return;
        // }






        // if (operation === 'addition') {
        //     newValues = {
        //         a: randomNumber(1, 100),
        //         b: randomNumber(1, 100),
        //     };
        // } else if (operation === 'division') {
        //     newValues = {
        //         b: randomNumber(1, 10), 
        //     };
        //     newValues.a = newValues.b * randomNumber(1, 10); // Гарантируем, что a делится на b
        // } else if (operation === 'subtraction') {
        //     newValues = checkSubtraction(randomNumber(1, 100), randomNumber(1, 100));
        //     // let tempValues = {
        //     //     a: randomNumber(1, 100),
        //     //     b: randomNumber(1, 100),
        //     // };
        //     // newValues = checkSubtraction(tempValues);
        // } else if (operation === 'multiplication') {
        //     newValues = {
        //         a: randomNumber(1, 10),
        //         b: randomNumber(1, 10),
        //     };
        // } else {
        //     console.error("Unknown operation:", operation);
        //     return;
        // }

        // setValues(newValues);

        // const formulaNumbers = formula.replace(/a/g, newValues.a).replace(/b/g, newValues.b);
        // setExample(formulaNumbers);

        // const f = parse(formula);
        // const evaluatedResult = f.evaluate(newValues);
        // setResult(evaluatedResult);
}

    useEffect(() => {
        if (dataOperation) {
            generateNewExample();
        }
    // }, [formula]);
    }, [dataOperation]);

    return { example, result, generateNewExample }
}

export default useGenerateExample;
