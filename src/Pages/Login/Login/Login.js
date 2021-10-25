import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passVali, setPassVali] = useState("-");

  const redirect_uri = location.state?.from?.pathname || "/";
  const {
    signInUsingGoogle,
    signInUsingGithub,
    setError,
    error,
    setLoading,
    signInUsingPass,
    setUser,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        setPassVali("Ensure string has two digits.");
        return;
      } else if (!/.{8,32}/.test(password)) {
        setPassVali("Password should be at least 8 characters");
        return;
      } else {
        debugger;
        signInUsingPass(email, password)
          .then((res) => {
            setUser(res.user);
            history.push(redirect_uri);
          })
          .catch((error) => setError(error.message));
      }
    }
    setValidated(true);
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => {
    if (!/(?=.*[0-9].*[0-9])/.test(e.target.value)) {
      setPassVali("Ensure string has two digits.");
      return;
    } else if (!/.{8,32}/.test(e.target.value)) {
      setPassVali("Password should be at least 8 characters");
      return;
    } else {
      setPassVali("");
      setPassword(e.target.value);
    }
  };

  const handleGoogleSignIn = () => {
    setError("");
    signInUsingGoogle()
      .then(() => history.push(redirect_uri))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };
  const handleGithubSignIn = () => {
    setError("");
    signInUsingGithub()
      .then(() => history.push(redirect_uri))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="login text-white">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>
        <h2 className="mb-3">Please Login</h2>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  required
                  type="email"
                  placeholder="Your Email"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Your Password</Form.Label>
                <Form.Control
                  onChange={handlePassword}
                  required
                  type="password"
                  placeholder="Password"
                />
                <span className="text-danger">
                  {error}
                  {passVali}
                </span>
              </Form.Group>
            </Row>
            <Button className="mt-2" type="submit">
              Submit
            </Button>
          </Form>
        </div>
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
