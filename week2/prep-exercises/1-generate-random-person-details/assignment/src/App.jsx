import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPerson = async () => {
    try {
    const res = await fetch('https://www.randomuser.me/api?results=1');
    const data = await res.json();
    setPerson(data.results[0]);
    setLoading(false);
  }  catch (error)
   {console.error("Error fetching user:", error)};
   setLoading(false);
  }
  
  useEffect(() => {
    fetchPerson()}, []);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!person) {
      return <div>Error loading person data.</div>;
    }
  
  return (
    <ul>
    <li>First name: {person.name.first}</li>
    <li>Last name: {person.name.last}</li>
    <li>Email: {person.email}</li>
  </ul>
  )
}

export default App
