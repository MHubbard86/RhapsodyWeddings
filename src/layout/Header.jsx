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
          src="../images/headerbarlogo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Rhapsody Wedding Hair and Events Hire"
        />
      </Navbar.Brand>
      <a href='https://www.facebook.com/'><AiOutlineFacebook style={{ fontSize, paddingRight:'5px', color: '#fff' }} /></a>
      <a href='https://www.instagram.com/'><AiOutlineInstagram style={{ fontSize, paddingRight:'3px', color: '#fff' }} /></a>   
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={location?.pathname}>
          <Nav.Link as={Link} to="/home" bg="white">
            Welcome
          </Nav.Link>
          <Nav.Link as={Link} to="/packages">
            Packages
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews">
            Reviews
          </Nav.Link>
          <Nav.Link as={Link} to="/faq">
            FAQ
          </Nav.Link>
          <Nav.Link as={Link} to="/email">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
