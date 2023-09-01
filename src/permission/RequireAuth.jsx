import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RequireAuth = ({children, redirectTo}) => {
    let {loggedin} = useSelector((state) => state.userState);
    if(!loggedin) {
        return <Navigate to="/login" />
    }
    return children;
}

export default RequireAuth;