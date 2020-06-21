import React from 'react';

function Results(props) {
    console.log(props)
        return (
            <>
        <h1 id='title'>Company Users Table</h1>
        <table id='usersTable'>
        <tbody>
            {props.users ? props.users.map(( user, i) => <tr key={i}>
            <td>{user.name.first}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.cell}</td>
            </tr>) : <p>No repo available!</p>}
            </tbody>
        </table>
        </>
    
    )
}

export default Results;