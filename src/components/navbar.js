import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-primary">
            <h2 className="">Covid Conscious </h2>
            <ul className="nav-links navbar-nav navbar-brand">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#link_targets">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="link_targets">
                    <Link to=''>
                        <li className="nav-item">
                            Username
                        </li>
                    </Link>
                    <Link to=''>
                        <li className="nav-item">
                            Add Log
                        </li>
                    </Link>
                    <Link to=''>
                        <li className="nav-item">
                            COVID FAQ
                        </li>
                    </Link>
                    <Link to=''>
                        <li className="nav-item">
                            Logout
                        </li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;
