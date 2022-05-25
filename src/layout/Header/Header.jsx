import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import './header.css';

export default function Header(props) {
  const { location } = props;
  return (
    <>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/home" style={{ fontSize: '20px'}}>Rhapsody</Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid" activeKey={location?.pathname} style={{ fontSize: '16px'}}>
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}