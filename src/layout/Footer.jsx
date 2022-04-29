import React from "react";
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar variant="dark" bg="dark">
        <Container style={{ justifyContent: 'center' }}>
          <Navbar.Brand>Welcome to Rhapsody Hair and Events</Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  );
}
