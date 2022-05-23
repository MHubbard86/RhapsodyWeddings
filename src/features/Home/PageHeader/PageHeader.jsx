import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PageHeader() {
  return (
    <>      
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ 
          backgroundImage: "url('/images/hair/9.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-white'>
              <h1 className='mb-3' style={{color: '#fff'}}>Rhapsody Hair and Events</h1>
              <Nav.Link as={Link} to="/email"
                className='btn btn-outline-light btn-lg m-2' role='button'
                style={{ border: '1px solid' }}
                >
                Contact Us
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}