import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // auto-collapse navbar on link click
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="custom-navbar py-3"
      expanded={expanded}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#hero" onClick={handleNavClick}>Robonity</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="#projects" onClick={handleNavClick}>Projects</Nav.Link>
            <Nav.Link href="#roadmap" onClick={handleNavClick}>Roadmap</Nav.Link>
            <Nav.Link href="#events" onClick={handleNavClick}>Events</Nav.Link>
            <Nav.Link href="#roboshare" onClick={handleNavClick}>RoboShare</Nav.Link>

          </Nav>
          <div>
            <Button variant="outline-light" className="me-2">Sign Up</Button>
            <Button variant="primary">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
