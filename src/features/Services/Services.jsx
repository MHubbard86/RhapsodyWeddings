import React from "react";
import PageHeader from '../../components/Headers/Pageheaders';
import HairService from './Hair/Hair';
import DecorService from './Decor/Decor';
import DecorItems from './Decor/DecorItems';
import Bundles from './Bundles/Bundles';
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
            <h6>
            Here at Rhapsody we provide your wedding Décor and Hair styling all in one place.<br />
            With a range of bespoke backdrops, rustic and customised décor to match your theme and colours
            plus so much more.<br />
            We specialise in the modern Boho Bride and Bridal hair styling with experience spamming over 
            20 years.<br />
            To get started please <Enquire isFilled={true} />
            </h6>
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
