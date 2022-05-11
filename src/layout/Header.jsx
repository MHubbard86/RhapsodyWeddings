import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
  const { location } = props;
  const fontSize ='2rem';
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="../images/logo.jpg"
          width="75"
          className="d-inline-block"
          alt="Rhapsody Wedding Hair and Events Hire"
        />
      </Navbar.Brand>
      <a href='https://www.facebook.com/'><AiOutlineFacebook style={{ fontSize, paddingRight:'5px', color: '#fff' }} /></a>
      <a href='https://www.instagram.com/'><AiOutlineInstagram style={{ fontSize, paddingRight:'3px', color: '#fff' }} /></a>   
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={location?.pathname}>
          <Nav.Link as={Link} to="/home" bg="white" eventKey="1">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/prices" eventKey="2">
            Prices
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery" eventKey="3">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews" eventKey="4">
            Reviews
          </Nav.Link>
          <Nav.Link as={Link} to="/photoshoot" eventKey="5">
            Photoshoots
          </Nav.Link>
          <Nav.Link as={Link} to="/faq" eventKey="6">
            FAQ
          </Nav.Link>
          <Nav.Link as={Link} to="/email" eventKey="7">
            Enquiry Form
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
