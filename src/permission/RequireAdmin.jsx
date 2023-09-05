import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RequireAdmin = ({ children, redirectTo }) => {
  let { adminPermission } = useSelector((state) => state.userState);
  if (!adminPermission) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAdmin;
