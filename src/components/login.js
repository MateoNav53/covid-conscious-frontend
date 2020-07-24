import React, {useState, useContext} from 'react';
import AuthService from '../services/AuthService';
// import Message from '../components/message';
import {AuthContext} from '../context/AuthContext';

function Login(props) {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const handleInputChange = (e) => {
        e.preventDefault();
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const submitLogin = () => {

    }

    return(
        <div>
            <form action="" method="post" className="col-md-8 offset-md-2" onSubmit={submitLogin}>
                <h1 className="form-group">Login</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter username" onChange={handleInputChange} name="username" value={user.username||""} id="username" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" onChange={handleInputChange} name="password" value={user.password||""} id="password" className="form-control" required></input>
                </div>
                <button type="submit" className="btn btn-warning">Login</button>
            </form>
            {/* {message ? <Message message={message}/> : null} */}
        </div>
    )
}

export default Login;