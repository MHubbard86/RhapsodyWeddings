
import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContactUs(props) {
const { isLight = false } = props;
  return (
    <Nav.Link 
        as={Link} 
        to="/email"
        className={`btn ${isLight ? 'btn-outline-light' : 'btn-outline-dark'} btn-lg m-2`} role='button'
        style={{ border: '1px solid' }}
    >
        Contact Us
    </Nav.Link>
  )
}

