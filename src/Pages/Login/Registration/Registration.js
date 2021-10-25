import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Registration.css";

const Registration = () => {
  const { signInUsingPassword, setError, error, setUser, setUserName } =
    useAuth();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [reqMessage, setreqMessage] = useState("-");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        setreqMessage("Ensure string has two digits.");
        return;
      } else if (!/.{8,32}/.test(password)) {
        setreqMessage("Password should be at least 8 characters");
        return;
      } else {
        setError("");
        signInUsingPassword(email, password)
          .then((result) => {
            setUserName(userName);
            setUser(result.user);
            history.push("/");
            setError("");
          })
          .catch((error) => setError(error.message));
      }
    }
    setValidated(true);
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleUserName = (e) => setUsername(e.target.value);
  const handlePassword = (e) => {
    setError("");
    let password = e.target.value;
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setreqMessage("Ensure string has two digits.");
      return;
    } else if (!/.{8,32}/.test(password)) {
      setreqMessage("Password should be at least 8 characters");
      return;
    } else {
      setreqMessage();
      setPassword(password);
    }
  };

  return (
    <div className="registration">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="mx-auto">
        <h2 className="text-white text-center mb-3">Please Register</h2>
        <Form
          noValidate
          className="text-center"
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="my-3 me-0 ms-0">
            <Form.Group as={Col} md="4" controlId="validationCustom03 ">
              <Form.Label className="text-white">Your Name</Form.Label>
              <Form.Control
                className="p-2"
                onBlur={handleUserName}
                required
                type="text"
                placeholder="Your Name"
              />
            </Form.Group>
          </Row>
          <Row className="my-3 me-0 ms-0">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label className="text-white">Your Email</Form.Label>
              <Form.Control
                className="p-2"
                onBlur={handleEmail}
                required
                type="email"
                placeholder="Your Email"
              />
            </Form.Group>
          </Row>

          <Row className="my-3 me-0 ms-0">
            <Form.Group as={Col}>
              <Form.Label className="text-white">Create Password</Form.Label>
              <Form.Control
                className="p-2"
                onChange={handlePassword}
                required
                type="password"
                placeholder="Your Password"
              />
              <span className="text-danger">
                {reqMessage} {error}
              </span>
            </Form.Group>
          </Row>
          <Button className="my-2 " type="submit">
            Submit
          </Button>
          <div>
            <p className="text-white">
              Already Have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
