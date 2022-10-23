import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {

    const [divisions, setDivisions] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/explore-divisions')
        .then(res => res.json())
        .then(data => setDivisions(data));

    }, [])

    return (
        <div>
            <h2>All Divisions:{divisions.length} </h2>
            <div>
                {
                    divisions.map(division => <p key={division.id}>
                        <Link to={`/division/${division.id}`}>{division.name} </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNavBar;