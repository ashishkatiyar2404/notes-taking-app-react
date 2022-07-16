import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const AuthRequire = ({ children }) => {
  const {
    authState: { IsLoggedIn },
  } = useAuth();

  let location = useLocation();

  return IsLoggedIn ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default AuthRequire;
