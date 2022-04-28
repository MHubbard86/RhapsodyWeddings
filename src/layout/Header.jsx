import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

export default function Header(props) {
  const { location } = props;
  const fontSize ='2rem';
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="../images/headerbarlogo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Rhapsody Wedding Hair and Events Hire"
        />
      </Navbar.Brand>
      <a href='https://www.facebook.com/'><AiOutlineFacebook style={{fontSize, paddingRight:'5px'}} /></a>
      <a href='https://www.instagram.com/'><AiOutlineInstagram style={{fontSize, paddingRight:'3px'}} /></a>   
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={location?.pathname}>
          <Nav.Link href="/" bg="white">
            Welcome
          </Nav.Link>
          <Nav.Link href="/packages">
            Packages
          </Nav.Link>
          <Nav.Link href="/reviews">
            Reviews
          </Nav.Link>
          <Nav.Link href="/faq">
            FAQ
          </Nav.Link>
          <Nav.Link href="/email">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
