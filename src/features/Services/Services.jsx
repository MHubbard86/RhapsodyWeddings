import React from "react";
import ServicesList from './ServicesList/ServicesList';
import HairService from './Hair';
import DecorService from './Decor';
import './styles.css';

export default function Services() {
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
          Services
        </h3>
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center">
            <HairService />
            <DecorService />
          </div>
        </div>   
      </section>      
      <ServicesList />
    </>
  );
}
