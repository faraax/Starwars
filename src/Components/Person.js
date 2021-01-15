import React from 'react';

function Person({ people }) {
    return (
        <div className="card">
            <h2> {people.name} </h2>
            <p>Gender : {people.gender} </p>
            <p>Birth Year : {people.birth_year}</p>
        </div>
    );
}

export default Person;