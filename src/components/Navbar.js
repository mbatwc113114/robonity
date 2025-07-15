// Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css';

// Accept scrolling functions as props
const CustomNavbar = ({ scrollToHero, scrollToProjects, scrollToRoadmap, scrollToEvents, scrollToRoboShare }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (scrollFunction) => {
    setExpanded(false); // auto-collapse navbar on link click
    if (scrollFunction) {
      scrollFunction(); // Call the passed scroll function
    }
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
        {/* Change href to onClick */}
        <Navbar.Brand onClick={() => handleNavClick(scrollToHero)}>Robonity</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            {/* Change href to onClick */}
            <Nav.Link onClick={() => handleNavClick(scrollToProjects)}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(scrollToRoadmap)}>Roadmap</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(scrollToEvents)}>Events</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(scrollToRoboShare)}>RoboShare</Nav.Link>

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