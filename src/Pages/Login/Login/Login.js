import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className="login">
      <div>
        <h2 className="mb-5">Please Login</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
        <div className="external-link">
          <p className="text-white mt-3">
            New Here ?
            <Link className="text-white" to="/registration">
              Registration
            </Link>
          </p>
          <button className="bg-transparent border-0">
            <FontAwesomeIcon
              className="mx-5 my-3 text-primary f-size"
              icon={faGoogle}
            />
          </button>
          <button className="bg-transparent border-0">
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
