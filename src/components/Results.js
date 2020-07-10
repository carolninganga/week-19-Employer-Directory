import React from 'react';
import 'animate.css';

function Results(props) {
    console.log(props)
        return (
            <>
        <h1 className="animate__animated animate__bounce" id='title'>Company Users Table</h1>
        <table id='usersTable' className="table">
        <thead>
            <tr>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Gender</th>
                <th scope='col'>Phone</th>
                <th scope='col'>City</th>
                <th scope='col'>State</th>
            </tr>
        </thead>
        <tbody>
            {props.users ? props.users.map(( user, i) => <tr key={i}>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.location.city}</td>
            <td>{user.location.state}</td>
            </tr>) : <p>No repo available!</p>}
            </tbody>
        </table>
        </>
    
    )
}

export default Results;