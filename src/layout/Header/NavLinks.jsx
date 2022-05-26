import React from 'react';
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InstagramIcon from '../../components/Icons/Instagram';
import EmailIcon from '../../components/Icons/Email';
import Links from './Links';

export default function NavLinks() {
  return (
    <>
      {Links?.map((LinkMap, k) => (
        <React.Fragment key={k}>
          {LinkMap.isMenu ?
            <DropdownButton variant="success" id="Gallery" title="Gallery">
            {LinkMap?.menuItems.map((item, i) => (
              <React.Fragment key={i}>
                <Dropdown.Item href={item.link}>{item.name}</Dropdown.Item>    
              </React.Fragment>
            ))}
            </DropdownButton> 
          :
            <Nav.Link as={Link} to={LinkMap.link} bg="white" eventKey={k}>
              {LinkMap.name}
            </Nav.Link>
          }
        </React.Fragment>
      ))}
      <Nav.Item className="ml-auto">
        <EmailIcon fontSize='2rem' />
        <InstagramIcon fontSize='2rem' />
      </Nav.Item>
    </>
  );
}