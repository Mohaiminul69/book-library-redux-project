import React from "react";
import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Container } from "react-bootstrap";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  let location = useLocation();
  if (!admin) {
    return (
      <Container className="text-center pt-5">
        <CircularProgress />
      </Container>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
