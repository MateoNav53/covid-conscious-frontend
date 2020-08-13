import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const MemberRestricted = ({component: Component, ...rest}) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if(isAuthenticated){
                return <Redirect to={{ pathname: '/loglist', state: {from: props.location}}}/>
            }
            return <Component {...props} />
        }}
        />
    )
}

export default MemberRestricted;