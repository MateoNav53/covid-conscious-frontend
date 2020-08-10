import React, {createContext, useState, useEffect} from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user)
            setIsAuthenticated(data.isAuthenticated)
            setIsLoaded(true);
        });
    }, []);

    return (
        <div>
            {!isLoaded ? <h1>Application Loading...</h1> : 
            //The Provider followed by defining the value sets what we want our global state to be
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                {children}
            </AuthContext.Provider>}
        </div>
    )
}