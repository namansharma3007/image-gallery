import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to='/login' replace={true} />;
  } else {
    return children;
  }

};

export default PrivateRoute;
