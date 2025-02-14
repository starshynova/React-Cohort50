import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuestionSectionSet from './components/QuestionSectionSet.jsx';
import QuestionSection from './components/QuestionSection.jsx';
import QuestionPage from './components/QuestionPage.jsx';
import { CountProvider } from './components/CountContext.jsx'



function App() {
  const [ countCorrectAnswer, setCountCorrectAnswer, countIncorrectAnswer, setCountIncorrectAnswer, correctAnswer, setCorrectAnswer ] = useState(''); 

  return (
    <CountProvider value={{ countCorrectAnswer, setCountCorrectAnswer, countIncorrectAnswer, setCountIncorrectAnswer, correctAnswer, setCorrectAnswer }}>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={
    <div className="center">
      <h1>Are you ready to do some math exercises?</h1>
      <QuestionSectionSet />
    </div>
   } />
   <Route path="/:operation" element={<QuestionPage />} />
   </Routes>
   </BrowserRouter>
   </CountProvider>
  )
}

export default App;
