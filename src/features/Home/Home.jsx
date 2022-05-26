import React from "react";
import Header from './Header';
import './styles.css';

export default function Home () {
  return (
    <>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ 
          backgroundImage: "url('/images/photoshoot/4.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-white'>
              <Header />
            </div>
          </div>
        </div>
      </div>    
    </>
  );
}