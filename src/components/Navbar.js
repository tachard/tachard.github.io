import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Navbar.Brand>Thomas Achard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Work</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/thomas-achard-healthtech/">
            <img
              alt="LinkedIn"
              src="https://img.icons8.com/fluency/48/linkedin.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-1"
            />
          </Nav.Link>
          <Nav.Link href="mailto://thomas.achard@ensc.fr">
            <img
              alt="Email"
              src="https://img.icons8.com/fluency/48/secured-letter.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-1"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
