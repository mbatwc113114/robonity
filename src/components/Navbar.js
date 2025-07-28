import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

// Accept navItems as a prop, and allow toggling position via the Position prop (default "fixed")
const CustomNavbar = ({
  navItems = [],
  scrollToHero,
  title = "title",
  Position = "fixed"
}) => {
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
      style={{ position: Position }} // Corrected: dynamic position value
    >
      <Container>
        <Navbar.Brand onClick={() => handleNavClick(scrollToHero)}>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => handleNavClick(item.scrollFunction)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <div>
            <Link to="/register">
              <Button variant="outline-light" className="me-2 sign-up">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="primary">
                Login
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
