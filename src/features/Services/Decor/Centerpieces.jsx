import React from "react";
import { WriteItem, WriteHeader, WriteItemIdent } from '../helper';
import '../styles.css';

export default function Centerpieces() {
  return (
    <>
      <div className="service-package list centerpieces">
        <div className="details">
          <WriteHeader header="Centerpieces" />
          <WriteItem description="Simple floral arrangement - £20 per table" />
          <WriteItemIdent description=" - Includes pillar candles or floating candles in jars" />
          <WriteItem description="Tall rectangle stands (gold) - £25 per table" />
          <WriteItem description="Handmade hoop stands - £35 per table" />
          <WriteItem description="Whisky and gin bottles - £10 per table" />
          <WriteItem description="Candelabras - £20 per table" />
          <WriteItemIdent description=" - Includes wooden blocks" />
        </div>
      </div>    
    </>
  );
}
