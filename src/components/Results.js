import React from 'react'

function Results(props) {
    console.log(props)
        return (
        <ul>
            {props.users ? props.users.map(( user, i) => <li key={i}>{user.name.first}</li>) : <p>No repo available!</p>}
        </ul>
    )
}

export default Results;