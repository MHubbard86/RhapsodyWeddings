import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import './header.css';

export default function Header(props) {
  const { location } = props;
  return (
    <>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Rhapsody</Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid" activeKey={location?.pathname}>
              <Nav.Link as={Link} to="/home" bg="white" eventKey="1">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/prices" eventKey="2">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" eventKey="3">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews" eventKey="4">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/photoshoot" eventKey="5">
              Styled Shoots
              </Nav.Link>
              <Nav.Link as={Link} to="/faq" eventKey="6">
                FAQs
              </Nav.Link>
              <Nav.Item className="ml-auto">
                <a
                  href='mailto:rhapsodyhairandevents@gmail.com'
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail style={{ fontSize: '2rem', marginRight: '5px' }} />
                </a>
                <a href='https://www.instagram.com/rhapsody_hairand_events/'
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram style={{ fontSize: '2rem' }} />
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}