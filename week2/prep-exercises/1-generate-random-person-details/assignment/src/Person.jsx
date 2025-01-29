import React from 'react'

function Person ({person}) {
    return (
    <ul>
        <li>First name: {person.firstName}</li>
        <li>Last name: {person.lastName}</li>
        <li>Email: {person.email}</li>
    </ul>
    )
}

export default Person