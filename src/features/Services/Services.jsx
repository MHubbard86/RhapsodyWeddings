import React from "react";
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import HairService from './Hair/Hair';
import DecorService from './Decor/Decor';
import DecorItems from './Decor/DecorItems';
import Bundles from './Bundles/Bundles';
import Enquire from '../Buttons/Enquire';
import Centerpieces from './Decor/Centerpieces';
import './styles.css';

export default function Services() {
  const PageDescription = `Here at Rhapsody we provide your wedding Décor and Hair styling all in one place.
    With a range of bespoke backdrops, rustic and customised décor to match your theme and colours plus so much more. 
    We specialise in the modern Boho Bride and Bridal hair styling with experience spamming over 20 years.
  `
  return (
    <>
      <section>
        <PageHeader title="Services"/>      
        <PageParagraph text={PageDescription} endIcon={<Enquire isFilled={true} />} />
        <div className="container-fluid">
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
