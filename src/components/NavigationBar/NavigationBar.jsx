import React, { useState } from 'react';
import './NavigationBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Icons/airplane.svg';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="navbar position-fixed top-0 start-0 w-100 z-3"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-light d-flex align-items-center" onClick={() => setExpanded(false)}>
            <img className="me-2 align-self-center" src={AirplaneLogo} alt="logo" />
            Travel spot
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link as={Link} to="/" className="text-light" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/holidays" className="text-light" onClick={() => setExpanded(false)}>Holidays</Nav.Link>
            <Nav.Link as={Link} to="/city-breaks" className="text-light" onClick={() => setExpanded(false)}>City Breaks</Nav.Link>
            <Nav.Link as={Link} to="/destinations" className="text-light" onClick={() => setExpanded(false)}>Destinations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
