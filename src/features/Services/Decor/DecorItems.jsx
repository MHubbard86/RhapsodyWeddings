import React from "react";
import { WriteItem, WriteHeader, WriteItemIdent } from '../helper';
import '../styles.css';

export default function DecorItems() {
  return (
    <>
      <div className="service-package list individual-items">
        <div className="details">
          <WriteHeader header="Individual Décor Items" />
          <WriteItem description="Ceremony backdrop - £150 to £200" />
          <WriteItemIdent description="Round moon gate arch" />
          <WriteItemIdent description="Rectangular arch" />
          <WriteItemIdent description="Wooden octagon arch" />
          <WriteItem description="Candy cart and donut wall (fully stocked) - £200" />
          <WriteItemIdent description="Rustic candy cart full of sweets in jars with tongs, scoops and sweet bags" />
          <WriteItemIdent description="Donut wall will up to 50 donuts" />
          <WriteItem description="Flower wall (add Neon for £35) - £100" />
          <WriteItem description="Neon sign - £65" />
          <WriteItem description="LOVE letters - £95" />
          <WriteItem description="Blossom trees canopy - £200" />
          <WriteItem description="Blossom moongate arch - £150" />
          <WriteItem description="Blossoms trees" />
          <WriteItemIdent description="1.2 table top blossoms - £10 per tree" />
          <WriteItemIdent description="1.8 table top blossoms - £10 per tree" />
          <WriteItem description="Floral arrangements - £60" />
          <WriteItemIdent description="Using top quality artificial flowers" />
        </div>
      </div>      
    </>
  );
}
