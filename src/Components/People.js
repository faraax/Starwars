import React, { useState } from 'react';
import { useQuery,  } from 'react-query';
import Person from './Person'


const fetchPeople = async (key) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${key.queryKey[1]}`)
    return res.json();
}

function People() {
    const [page, setPage] = useState(1);
    const { data, status } = useQuery(['People', page], fetchPeople)

    return (
        <div>
            <h1>People</h1>
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
                    { data.results.map(people => <Person key={people.name} people={people} />)}
                </div>
            )}
        </div>
    );
}

export default People;