import React from 'react'

function Person (props) {
    return (
    <ul>
        <li>First name: {props.firstName}</li>
        <li>Last name: {props.lastName}</li>
        <li>Email: {props.email}</li>
    </ul>
    )
}

export default Person