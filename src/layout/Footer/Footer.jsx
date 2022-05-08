import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { ImPower } from 'react-icons/im';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar variant="dark" bg="dark">
        <Container style={{ justifyContent: 'center' }}>
          <Navbar.Brand>Welcome to Rhapsody Hair and Events</Navbar.Brand>
          <div style={{color: '#fff'}}><Link to="/poweredby"><ImPower /></Link></div>
          </Container>
      </Navbar>
    </div>
  );
}
