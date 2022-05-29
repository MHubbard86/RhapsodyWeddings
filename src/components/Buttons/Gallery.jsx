
import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function GalleryButton(props) {
  const { isLight = false } = props;
  return (
    <Nav.Link 
        as={Link} 
        to="/gallery#hair"
        className={`btn ${isLight ? 'btn-outline-light' : 'btn-outline-dark'} btn-lg m-2`} role='button'
        style={{ border: '1px solid' }}
    >
      Gallery
    </Nav.Link>
  )
}

