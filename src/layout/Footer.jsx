import React from "react";
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Demo site created by Matthew Hubbard for demonstrative purposes only and does not offer
              any real products or services.</Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  );
}
