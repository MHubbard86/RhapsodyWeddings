import React from "react";
import ServicesList from './ServicesList/ServicesList';
import PageHeader from '../../components/Headers/Pageheaders';
import HairService from './Hair';
import DecorService from './Decor';
import './styles.css';

export default function Services() {
  return (
    <>
      <section style={{ backgroundColor: '#f3f2f2', paddingTop: '10px'}}>
        <PageHeader title="Services"/>
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
