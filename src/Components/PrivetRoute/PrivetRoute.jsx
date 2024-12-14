import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user, loading }= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <p>loading ...........</p>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivetRoute;