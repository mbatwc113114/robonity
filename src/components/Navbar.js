// Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css';

// Accept navItems as a prop, and keep scrollToHero separate for the brand link
const CustomNavbar = ({ navItems = [], scrollToHero , title="title" }) => {
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
        <Navbar.Brand onClick={() => handleNavClick(scrollToHero)}>{title}</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            {/* Dynamically render Nav.Links based on navItems prop */}
            {navItems.map((item, index) => (
              <Nav.Link key={index} onClick={() => handleNavClick(item.scrollFunction)}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <div>
            <Button variant="outline-light" className="me-2 sign-up">Sign Up</Button>
            <Button variant="primary">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;