import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { ImPower } from 'react-icons/im';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar variant="dark" bg="dark">
        <Container style={{ justifyContent: 'center' }}>
          <Navbar.Brand style={{ marginRight: '1rem' }}>Welcome to Rhapsody Hair and Events</Navbar.Brand>
          <Link to="/poweredby"><ImPower style={{color: '#fff'}} /></Link>
          </Container>
      </Navbar>
    </div>
  );
}
