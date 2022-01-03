import React from "react";
import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Container } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <Container className="text-center pt-5">
        <CircularProgress />
      </Container>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
