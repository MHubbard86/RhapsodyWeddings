import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InstagramIcon from '../../components/Icons/Instagram';
import EmailIcon from '../../components/Icons/Email';
import Links from './Links';

export default function NavLinks() {
  return (
    <>
      {Links?.map((LinkMap, k) => (
        <React.Fragment key={k}>
          <Nav.Link as={Link} to={LinkMap.link} bg="white" eventKey={k}>
            {LinkMap.name}
          </Nav.Link>
        </React.Fragment>
      ))}      
      <Nav.Item className="ml-auto">
        <EmailIcon fontSize='2rem' />
        <InstagramIcon fontSize='2rem' />
      </Nav.Item>
    </>
  );
}