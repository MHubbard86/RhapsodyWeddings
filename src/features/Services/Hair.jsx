import React from "react";
import ContactUs from '../../components/Buttons/ContactUs';
import GalleryButton from '../../components/Buttons/Gallery';
import './styles.css';

export default function HairService() {
  return (
    <>
      <div className="service-package" style={{ display:'flex', gap:'10px', backgroundColor: '#fff' }}>
        <div>
          <h3>Full Bridal Hair Package</h3>
          <h4>£650</h4>
          <h6>What's included:</h6>
          <h6 style={{ marginLeft: '20px'}}>3 bridemaids + Mother of the Bride</h6>
          <h6 style={{ marginLeft: '20px'}}>Includes trail prior to the day</h6>
          <h6 style={{ marginLeft: '20px'}}>Travel</h6>
          <h6 style={{ marginLeft: '20px'}}>Free use of accessories</h6>
          <h6>Additional Bridemaids are priced individually</h6>
          <h5 style={{ marginTop: '10px'}}>Individual Prices</h5>
          <h6>Bride - £150</h6>
          <h6>Bridemaids - £50</h6>
          <h6>Trail Only - £65</h6>
          <h6>Mother of the Bride or Groom - £45</h6>
          <h6>Under 10s - £35 each</h6>
          <h6>Extra Guests - £50 per person</h6>
          <h6>Use of hair extensions/hair pieces individual wefts - £60</h6><br />
          <h6>Please enquire here to get started or see more examples within our Gallery:</h6>
            <ContactUs />&nbsp;<GalleryButton />
        </div>
        <div>
          <img
            src="../images/services/decor.jpg"
            className="d-inline-block"
            alt="Rhapsody Wedding Hair and Events "
            width='auto'
            height='500px'
          />
        </div>
      </div>
    </>
  );
}
