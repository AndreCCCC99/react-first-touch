import React from 'react';

import {Link} from "react-router-dom";

const Navbar = () => { 
    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Random">Random</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );

}

export default Navbar