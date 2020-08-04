import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

function Home () {
    const {isAuthenticated} = useContext(AuthContext)

    const authButtons = () => {
        return (
        <div className="d-flex">
            <Link to="/login">
                <button type="button" className="btn btn-warning home-btn">Login</button>
            </Link>
            <Link to="/register">
                <button type="button" className="btn btn-warning home-btn">Register</button>
            </Link>
        </div>
        )
    }

    return(
        <div className="home-container">
            <h1 className="home-item"><strong>Covid Conscious</strong></h1>
            <h4 className="home-item">Keep a log. Stay on top of your risk</h4>
            <div className="d-flex">
                {!isAuthenticated ? authButtons() : null}
            </div>
            <div class="elfsight-app-4bfe4b25-9e78-4673-836b-f6dfb62163e1"></div>
        </div>
        
        
    )
}

export default Home;