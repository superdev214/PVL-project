import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RequireAuth = ({children, redirectTo}) => {
    let {loggedin} = useSelector((state) => state.userState);
    const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
    if(!token) {
        return <Navigate to="/login" />
    }
    return children;
}

export default RequireAuth;