import React, {useState, useRef, useEffect} from 'react';
import AuthService from '../services/AuthService';
import Message from '../components/Message';

function Register(props) {
    const [user, setUser] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
    })
    const [message, setMessage] = useState('');
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID)
        };
    }, [])

    const clearForm = () => {
        setUser({
            username: "",
            fullname: "",
            email: "",
            password: "",
        });
    }

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitReg = (e) => {
        e.preventDefault()
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            clearForm();
            if(!message.errorMessage){
                timerID = setTimeout(()=>{
                props.history.push('/login');
            },1500)
            }
        }) 
    }
    
    return(
        <div>
            <form action="" method="post" onSubmit={submitReg} className="col-md-8 offset-md-2">
                <h1 className="form-group page-header">Register</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter username" value={user.username||""} onChange={onChange} name="username" id="username" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Enter full name" value={user.fullname||""} onChange={onChange} name="fullname" id="full-name" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email" value={user.email||""} onChange={onChange} name="email" id="email" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" value={user.password||""} onChange={onChange} name="password" id="password" className="form-control" required></input>
                </div>
                <button type="submit" className="btn btn-warning">Register</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
}

export default Register;