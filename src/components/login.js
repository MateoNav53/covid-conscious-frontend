import React, {useState, useContext} from 'react';
import AuthService from '../services/AuthService';
import {AuthContext} from '../context/AuthContext';

function Login(props) {

    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const authContext = useContext(AuthContext);
    const [error, setError] = useState('')

    const submitLogin = (e) => {
        e.preventDefault()
        const newValueStr = e.target.value;
        console.log('newvaluestr', newValueStr);
        setUser({
            username: newValueStr,
            password: newValueStr 
        });
        AuthService.login(user).then(data=>{
            console.log(data)
            const {isAuthenticated, user} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                setError('')
                props.history.push('/loglist');
            }
            else{
                setError('Incorrect credentials, please re-enter');
            }
        }).catch( x => console.log('ERROR', x));

    }

    return(
        <div>
            <form action="" method="post" className="col-md-8 offset-md-2" onSubmit={submitLogin}>
                <h1 className="form-group page-header">Login</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter username" value={user.username||""} name="username" onChange={e => setUser({...user, username: e.target.value})} id="username" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" value={user.password||""} name="password" onChange={e => setUser({...user, password: e.target.value})} id="password" className="form-control" required></input>
                </div>
                <button type="submit" className="btn btn-warning">Login</button>
                {error ? <div className="alert alert-danger">{error}</div> : null}
            </form>
        </div>
    )
}

export default Login;