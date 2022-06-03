import React from "react";
import PageHeader from '../../components/Headers/Pageheaders';
import HairService from './Hair/Hair';
import DecorService from './Decor/Decor';
import DecorItems from './Decor/DecorItems';
import Bundles from './Bundles/Bundles';
import Button from '../../components/Buttons/Button';
import Enquire from './Buttons/Enquire';
import Centerpieces from './Decor/Centerpieces';
import './styles.css';

export default function Services() {
  return (
    <>
      <section style={{ backgroundColor: '#f3f2f2' }}>
        <PageHeader title="Services"/>
        <div className="container-fluid">
          <p className="text-center">
            Description goes here...
            <Enquire />
            &nbsp;
            <Button link="/gallery#hair" text="Gallery" />
          </p>
          <div className="service-grid justify-content-center">
            <HairService />
            <DecorService />
          </div>
          <div className="service-grid-list justify-content-center">
            <DecorItems />
            <Centerpieces />
            <Bundles />
          </div>
        </div>   
      </section>      
    </>
  );
}
