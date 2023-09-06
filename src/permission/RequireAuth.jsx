import React from "react";
import { Navigate } from "react-router-dom";
const RequireAuth = ({children, redirectTo}) => {
    const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
    if(!token) {
        return <Navigate to="/login" />
    }
    return children;
}

export default RequireAuth;