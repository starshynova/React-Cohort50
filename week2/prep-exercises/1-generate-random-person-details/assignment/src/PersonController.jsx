import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController () {
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
        <Person 
        firstName={person.name.first} 
        lastName={person.name.last} 
        email={person.email} /> 
    )
}

export default PersonController;