import React from "react";
import Header from './Header';
import './styles.css';

export default function Home () {
  return (
    <>
      <div className='text-center'>
        <div className='d-flex justify-content-center align-items-center'>
          <div style={{ margin: '10px' }}>
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}