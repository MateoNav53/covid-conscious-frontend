import React, {useState, useContext} from 'react';
import AuthService from '../services/AuthService';
import FlashFunction from './FlashMessage';
import {AuthContext} from '../context/AuthContext';

function Login(props) {

    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const [flashMessage, setFlashMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const [error, setError] = useState('')

    const submitLogin = (e) => {
        e.preventDefault()
        setUser({
            username: e.target.value,
            password: e.target.value
        });
        AuthService.login(user).then(data=>{
            const {isAuthenticated, user} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                setError('')
                props.history.push('/loglist');
                console.log(user)
            }
            else{
                setError('Incorrect credentials, please re-enter');
            }
        })

    }

    return(
        <div>
            <form action="" method="post" className="col-md-8 offset-md-2" onSubmit={submitLogin}>
                <div className="error-message">{error}</div>
                <h1 className="form-group">Login</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter username" value={user.username||""} name="username" onChange={e => setUser({...user, username: e.target.value})} id="username" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" value={user.password||""} name="password" onChange={e => setUser({...user, password: e.target.value})} id="password" className="form-control" required></input>
                </div>
                <button type="submit" className="btn btn-warning">Login</button>
            </form>
            {/* { flashMessage ? <FlashFunction message={flashMessage} /> : null} */}
        </div>
    )
}

export default Login;