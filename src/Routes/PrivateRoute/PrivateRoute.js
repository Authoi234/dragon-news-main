import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

/* 
1. only allow authenticated user to visit the rout
*/
const PrivateRoute = ({children}) => { 
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;