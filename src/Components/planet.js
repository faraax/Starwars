import React from 'react';

function Planet({ planet }) {
    return (
        <div className="card">
            <h2> {planet.name} </h2>
            <p>Population : {planet.population} </p>
            <p>Terrain : {planet.terrain}</p>
        </div>
    );
}

export default Planet;