import React from 'react';

const Navbar = ({ setPage }) => {
    return (
        <nav>
            <button onClick={() => setPage('planet')} >Planet</button>
            <button onClick={() => setPage('chars')} >People</button>
            {/* <div className="tab active">
                <a href="#" onClick={() => setPage('planet')}>Planets</a>
            </div>
            <div className="tab">
                <a href="#" onClick={() => setPage('char')}>People</a>
            </div> */}
        </nav>
    );
}

export default Navbar;


