import { Navigate } from "react-router";
import React from "react";
import useAuth from "../hooks/useAuth";
import ChildrenProps from "../interface/ChildrenProps";

const PrivateRoute = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
