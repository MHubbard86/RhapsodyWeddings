
import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const { isLight = false, link = '', text ='', isFilled = false } = props;
  const btn = isFilled ? 'btn' : 'btn-outline';
  const btnClass = isLight ? btn + '-light': btn + '-dark';
  return (
    <Nav.Link 
      as={Link}
      to={link}
      className={`btn ${btnClass} btn-lg m-2`}
      role='button'
      style={{ border: '1px solid' }}
    >
      {text}
    </Nav.Link>
  )
}

