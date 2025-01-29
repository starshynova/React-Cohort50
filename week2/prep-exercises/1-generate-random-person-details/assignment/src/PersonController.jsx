import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController () {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPerson = async () => {
    try {
    const res = await fetch('https://www.randomuser.me/api?results=1');
    const data = await res.json();

    const shortPerson = {
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        email: data.results[0].email,
    }

    setPerson(shortPerson);
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
        <Person person={person} /> 
    )
}

export default PersonController;