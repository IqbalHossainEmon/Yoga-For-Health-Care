import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="nav-bg "
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbar-font" as={NavLink} to="/home">
          <h1>Yoga For Health Care</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/features">
              Features
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Login">
              Login
            </Nav.Link>
          </Nav>
          <Navbar.Text className=" mx-2">
            Signed in as :
            <Link className="text-decoration-none" to="/login">
              {" "}
              Mark Otto
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
