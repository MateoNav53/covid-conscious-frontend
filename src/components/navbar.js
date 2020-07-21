import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <a href="/" className="brand">Covid Conscious</a>
            <ul className="nav-links navbar-nav navbar-brand">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#link_targets">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="link_targets">
                    <Link to='/'>
                        <li className="nav-item">
                            Home
                        </li>
                    </Link>
                    <Link to='/addlog'>
                        <li className="nav-item">
                            Add Log
                        </li>
                    </Link>
                    <Link to='/loglist'>
                        <li className="nav-item">
                            View Logs
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
