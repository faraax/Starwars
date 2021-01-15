import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './planet'

const fetchPlanets = async (key) => {
    // console.log(key.queryKey[1])
    // const res = await fetch(`http://swapi.dev/api/planets/`)
    const res = await fetch(`https://swapi.dev/api/planets/?page=${key.queryKey[1]}`)
    return res.json();
}

function Planets() {
    const [page , setPage] = useState(1);   
    const { data, status } = useQuery(['planets',page], fetchPlanets);

    return (
        <div>
            <h1>Planets</h1>

        <button onClick={() => setPage(1)}>Page 1</button>
        <button onClick={() => setPage(2)}>Page 2</button>
        <button onClick={() => setPage(3)}>Page 3</button>

            { status === "loading" && (
                <div className="card">Data is loading please wait . . . </div>
            )}
            { status === "error" && (
                <div className="card">Error fetching Data</div>
            )}
            { status === "success" && (
                <div>
                    { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    );
}

export default Planets;