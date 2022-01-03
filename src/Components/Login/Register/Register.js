import React from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import Button from "@mui/material/Button";
import useAuth from "../../../Hooks/useAuth";
import "./register.css";
import { Alert, CircularProgress } from "@mui/material";

const Register = () => {
  const { user, authError, registerUser, signInWithGoogle, isLoading } =
    useAuth();
  const location = useLocation();
  const nagigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle(location, nagigate);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Password didnt match");
      return;
    }
    registerUser(data.email, data.password, data.name, nagigate);
    reset();
  };
  return (
    <div className="bgLogin">
      <Navigation />
      <Container className="text-center">
        <Row>
          <Col sm={12} md={3}></Col>
          <Col sm={12} md={6}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
                <h6 className="display-6 mb-3">Please Register</h6>
                <input
                  {...register("name", { required: true })}
                  placeholder="Username"
                  type="text"
                  className="form-control mb-3"
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  type="email"
                  className="form-control mb-3"
                />
                <input
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="form-control mb-3"
                  type="password"
                />
                <input
                  {...register("password2", { required: true })}
                  placeholder="Confirm Password"
                  className="form-control mb-3"
                  type="password"
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button className="customBtn" type="submit" variant="contained">
                  Register
                </Button>
                <NavLink to="/login">
                  <Button className="customLink" variant="text">
                    Already a user? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {user?.email && (
              <Alert severity="success">User Created Successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Col>
          <Col sm={12} md={3}></Col>
        </Row>
        <p className="text-primary my-3 fs-4">or</p>
        <Button
          className="customBtn"
          onClick={handleGoogleLogin}
          variant="contained"
        >
          <img
            src="https://img.icons8.com/fluency/50/000000/google-logo.png"
            alt=""
            className="googleIcon"
          />
          <span className="ms-2">Sign In with Google</span>
        </Button>
      </Container>
    </div>
  );
};

export default Register;
