import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="registration">
      <div className="text-center">
        <h2 className="text-white mb-3">Please Register</h2>

        <FloatingLabel
          controlId="floatingInput"
          label="Your Name"
          className="mb-2"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Your Email"
          className="mb-2"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button className="my-4" variant="outline-primary">
          Submit
        </Button>

        <div>
          <p className="text-white">
            Already Have an Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
