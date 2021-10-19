import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(location);

  const {
    signInUsingGoogle,
    signInUsingGithub,
    signInUsingPassword,
    setError,
    error,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    setError("");
    signInUsingGoogle()
      .then(() => history.push(from))
      .catch((error) => setError(error.message));
  };
  const handleGithubSignIn = () => {
    setError("");
    signInUsingGithub()
      .then(() => history.push(from))
      .catch((error) => setError(error.message));
  };
  const handleSubmit = () => {
    setError("");
    signInUsingPassword(email, password);
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  return (
    <div className="login">
      <div>
        <h2 className="mb-5">Please Login</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
        <p className="text-danger">{error}</p>
        <Button
          onClick={handleSubmit}
          variant="primary"
          className="mt-3"
          type="submit"
        >
          Submit
        </Button>
        <div className="external-link">
          <p className="text-white mt-3">
            New Here ?
            <Link className="text-white" to="/registration">
              Registration
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="bg-transparent border-0"
          >
            <FontAwesomeIcon
              className="mx-5 my-3 text-primary f-size"
              icon={faGoogle}
            />
          </button>
          <button
            onClick={handleGithubSignIn}
            className="bg-transparent border-0"
          >
            <FontAwesomeIcon
              className="mx-5 my-3 text-primary f-size"
              icon={faGithub}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
