import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvidor/AuthProvidor';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading){
        <p>Loading...</p>
    }
      if (user) {
        return children;
      }
    return <Navigate state={{from: location}}replace></Navigate>
};

export default PrivateRoute;