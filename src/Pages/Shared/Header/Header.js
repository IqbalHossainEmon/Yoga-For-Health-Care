import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
            <Nav.Link as={NavLink} to="/whoWeAre">
              Who We Are
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            {!user.displayName && (
              <Nav.Link as={NavLink} to="/Login">
                Login
              </Nav.Link>
            )}
          </Nav>
          {user.displayName && (
            <Navbar.Text className="text-warning mx-2">
              Signed in as :
              <Link className="text-decoration-none" to="/login">
                {user.displayName}
              </Link>
            </Navbar.Text>
          )}
          {user.displayName && (
            <Button variant="outline-primary" onClick={logOut}>
              LogOut
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
