import { useState } from 'react'
import './App.css';
import QuestionSectionSet from './QuestionSectionSet';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="center">
      <h1>Are you ready to do some math exercises?</h1>
   <QuestionSectionSet />
   </div>
  )
}

export default App;
