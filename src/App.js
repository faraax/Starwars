import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Planet from './Components/Planets';
import People from './Components/People';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  let [page, setPage] = useState('planet')

  return (
    <>
      <div className="App">
        <h1 className="Heading">Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planet' ? <Planet /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
