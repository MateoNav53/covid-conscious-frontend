import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';
import {AuthContext} from '../context/AuthContext';


function Navbar() {
    const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext)

    const logoutUser = () => {
        AuthService.logout().then(data => {
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }

    const unauthenticatedNav = () => {
        return(
            <>
                <li className="navbar-item">
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/register'>
                        Register
                    </Link>
                </li>
            
                <li className="navbar-item">
                    <Link to='/covidfaq'>
                        COVID FAQ
                    </Link>
                </li>
            </>
        )
    }
    const authenticatedNav = () => {
        return(
            <>
                <li className="navbar-item">
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/addlog'>
                        Add Log
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/loglist'>
                        View {user.username}'s Logs
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/covidfaq'>
                        COVID FAQ
                    </Link>
                </li>
                <Link to='/'>
                    <button type="button" className="btn btn-secondary" onClick={logoutUser}>Logout</button>
                </Link>
            </>
        )
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
            <a href="/" className="brand mb-auto">               
                Covid Conscious  
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#link_targets" aria-controls="link_targets" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="link_targets">
                <ul className="nav-links navbar-nav navbar-brand ml-auto">
                    {!isAuthenticated ? unauthenticatedNav() : authenticatedNav()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
