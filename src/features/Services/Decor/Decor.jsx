import React from "react";
import { WriteItem, WriteHeaderItem, WritePrice, WriteHeader } from '../helper';
import '../styles.css';

export default function DecorService() {
  return (
    <>
      <div className="service-package decor">
        <div className="details">
          <WriteHeader header="Full Décor Package" />
          <WritePrice price="£650" />
          <WriteHeaderItem description="What's included:" />
          <WriteItem description="Postbox" />
          <WriteItem description="Candy Cart (fully stocked)" />
          <WriteItem description="Donut Wall (fully stocked)" />
          <WriteItem description="Ceremony backdrop (of your choice) or Flower Wall" />
          <WriteItem description="Welcome Sign Mirror" />
          <WriteItem description="Table Plan Mirror" />
          <WriteItem description="Rose or Blossom Trees" />
          <WriteItem description="Lanterns" />
          <WriteItem description="Ladder Display" />
          <br />
          <WriteHeaderItem description="Fully customised to your wedding colours" />
        </div>        
      </div>
    </>
  );
}
