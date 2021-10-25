import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="header-1 text-white">
        <h1>Contact</h1>
        <p className="bg-warning text-dark ps-3">
          Feel free to contact us for any question!
        </p>
      </div>
      <Form className="container my-5">
        <FloatingLabel
          controlId="floatingInput"
          label="Your Name"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write what you want to say</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>
        <Link to="./commingSoon">
          <Button variant="outline-primary">Submit</Button>
        </Link>
      </Form>
    </div>
  );
};

export default Contact;
