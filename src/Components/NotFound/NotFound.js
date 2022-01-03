import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";
import Button from "@mui/material/Button";
import "./notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate.goBack();
  };
  return (
    <div className="not-found-background">
      <Navigation />
      <Container className="notFoundDiv">
        <h1 className="display-1 text-danger">404</h1>
        <h1 className="display-4">Page Not Found</h1>
        <h1 className="fw-light text-capitalize">Are you lost baby girl !!</h1>
        <div className="my-3">
          <Link to="/">
            <Button variant="contained" className="customBtn me-5">
              Homepage
            </Button>
          </Link>
          <Button
            variant="contained"
            onClick={handleBack}
            className="customBtn"
          >
            Go Back
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
