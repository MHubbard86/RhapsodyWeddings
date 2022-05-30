import React from "react";
import PageHeader from '../../components/Headers/Pageheaders';
import HairService from './Hair';
import DecorService from './Decor';
import DecorItems from './DecorItems';
import './styles.css';

export default function Services() {
  return (
    <>
      <section style={{ backgroundColor: '#f3f2f2' }}>
        <PageHeader title="Services"/>
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center">
            <HairService />
            <DecorService />
            <DecorItems />
          </div>
        </div>   
      </section>      
    </>
  );
}
