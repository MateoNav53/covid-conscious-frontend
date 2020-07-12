import React from 'react';

function Register() {
    return(
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
            </form>
        </div>
    )
}

export default Register;