import React from "react";
import { WriteItem, WriteHeaderItem, WritePrice, WriteHeader } from '../helper';
import '../styles.css';

export default function HairService() {
  return (
    <>
      <div className="service-package hair">
        <div className="details">
          <WriteHeader header="Full Bridal Hair Package" />
          <WritePrice price="£350" />
          <WriteHeaderItem description="What's included:" />
          <WriteItem description="3 bridemaids + Mother of the Bride" />
          <WriteItem description="Includes trail prior to the day" />
          <WriteItem description="Travel" />
          <WriteItem description="Free use of accessories" />
          <WriteHeaderItem description="Additional Bridemaids are priced individually" />
          <h5 style={{ marginTop: '10px'}}>Individual Prices</h5>
          <WriteItem description="Bride - £150" />
          <WriteItem description="Bridemaids - £50" />
          <WriteItem description="Trail Only - £65" />
          <WriteItem description="Mother of the Bride or Groom - £45" />
          <WriteItem description="Under 10s - £35 each" />
          <WriteItem description="Extra Guests - £50 per person" />
          <WriteItem description="Use of hair extensions and hair pieces with individual wefts - £60" />
        </div>
      </div>
    </>
  );
}
