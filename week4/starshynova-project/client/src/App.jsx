import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuestionSectionSet from './components/QuestionSectionSet.jsx';
import QuestionSection from './components/QuestionSection.jsx';
import QuestionPage from './components/QuestionPage.jsx';



function App() {

  return (
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
  )
}

export default App;
