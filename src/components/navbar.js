import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthService from '../services/AuthService';
import {AuthContext} from '../context/AuthContext';


function Navbar() {
    const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext)

    const logoutUser = () => {
        AuthService.logout().then(data => {
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
                console.log('logout function worked')
            }
        })
    }

    const unauthenticatedNav = () => {
        return(
            <>
                <Link to='/'>
                    <li id="nav-id" className="nav-item">
                        Home
                    </li>
                </Link>
                <Link to='/login'>
                    <li id="nav-id" className="nav-item">
                        Login
                    </li>
                </Link>
                <Link to='/register'>
                    <li id="nav-id" className="nav-item">
                        Register
                    </li>
                </Link>
                <Link to='/covidfaq'>
                    <li id="nav-id" className="nav-item">
                        COVID FAQ
                    </li>
                </Link>
            </>
        )
    }
    const authenticatedNav = () => {
        return(
            <>
                <Link to='/'>
                    <li id="nav-id" className="nav-item">
                        Home
                    </li>
                </Link>
                <Link to='/addlog'>
                    <li id="nav-id" className="nav-item">
                        Add Log
                    </li>
                </Link>
                <Link to='/loglist'>
                    <li id="nav-id" className="nav-item">
                        View Logs
                    </li>
                </Link>
                <Link to='/covidfaq'>
                    <li id="nav-id" className="nav-item">
                        COVID FAQ
                    </li>
                </Link>
                <Link to='/'>
                    <button type="submit" className="btn btn-secondary btn-link nav-item" onClick={logoutUser()}>Logout</button>
                </Link>
            </>
        )
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                <a href="/" className="brand">               
                    Covid Conscious  
                </a>
            <ul className="nav-links navbar-nav navbar-brand">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#link_targets">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="link_targets">
                    {!isAuthenticated ? unauthenticatedNav() : authenticatedNav()}
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;
