import {useEffect, useState} from 'react';
import { getData } from './getData.js';
import QuestionSection from './ QuestionSection.jsx';


const QuestionSectionSet = () => {
    const [data, setData] = useState([]);

    // const QuestionSection = ({operation}) => {
    //     return (
    //         <button className="question-section">
    //             {operation}
    //         </button>
    //     )
    // };
    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div className="question-section-set">
            {data.map((question) => (
                <QuestionSection key={question._id} operation={question.operation} />
            ))}
        </div>
    );
};

export default QuestionSectionSet;