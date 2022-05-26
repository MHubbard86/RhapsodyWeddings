import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>      
      <div className='centerContent' style={{marginTop: '10px'}}>
        <img
          src="../images/logo_main.jpg"
          className="d-inline-block"
          alt="Rhapsody Wedding Hair and Events "
          width='auto'
          height='180px'
        />
      </div>
      <h1 className='mb-3' style={{color: '#fff', marginTop: '10px'}}>Rhapsody Hair and Events</h1>
      <h5 className='mb-3' style={{color: '#fff', margin: '1rem'}}>
        Thank you for visiting us and congratulations on your engagement.<br /><br />
        I'm Amy. <br /><br />
        I've been in the hair industry for 20+ years and have worked alongside some of the 
        most influential stylists in London and at shows.  I've always had a flare for 
        wedding hair and love to style brides (and squad) for their special days.<br /><br />
        Based in Colchester, Essex.  I cover the Essex and Suffolk areas and we are a recommended 
        supplier at the beautiful idyllic <a href='https://prested.co.uk/suppliers/' target="_blank" rel="noopener noreferrer"> Prested Hall</a>.<br /><br />
        Our venue décor was established in 2019 when I was planning my own wedding.  
        Afterwards I had other brides approach me to hire some of our décor items, 
        with that we expanded further and now have many couples enquiring our wedding décor.<br /><br />
        I always have my couples in mind and will always stay budget friendly, whether 
        it's a big budget or small there's something for everyone.  I am a pure perfectionist 
        and will always give my 100% to every couple I work with.  My aim is to gave you 
        the day of your dreams completely stress free.
      </h5>
      <Nav.Link 
        as={Link} 
        to="/email"
        className='btn btn-outline-light btn-lg m-2' role='button'
        style={{ border: '1px solid' }}
      >
        Contact Us
      </Nav.Link>
    </>
  );
}