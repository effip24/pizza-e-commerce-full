import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin, ...props }) => {
  return <Route {...props}>{isAdmin ? children : <Redirect to={"/login"} />}</Route>;
};

export default ProtectedRoute;
