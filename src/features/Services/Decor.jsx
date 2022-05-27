import React from "react";
import ContactUs from '../../components/Buttons/ContactUs';
import GalleryButton from '../../components/Buttons/Gallery';
import './styles.css';

export default function DecorService() {
  return (
    <>
      <div className="service-package">
        <h3>Full Décor Package</h3>
        <h4>£650</h4>
        <div>
          <h6>What's included:</h6>
          <h6 style={{ marginLeft: '20px'}}>Postbox</h6>
          <h6 style={{ marginLeft: '20px'}}>Candy Cart (fully stocked)</h6>
          <h6 style={{ marginLeft: '20px'}}>Donut Wall (fully stocked)</h6>
          <h6 style={{ marginLeft: '20px'}}>Ceremony backdrop or Flower Wall</h6>
          <h6 style={{ marginLeft: '20px'}}>Welcome Sign or Table Plan Mirrors</h6>
          <h6 style={{ marginLeft: '20px'}}>Rose or Blossom Trees</h6>
          <h6 style={{ marginLeft: '20px'}}>Lanterns</h6>
          <h6 style={{ marginLeft: '20px'}}>Ladder Display</h6>
          <h6>Customised to your wedding colours</h6>
          <h6>Please enquire here to get started or see more examples within our Gallery:</h6>
            <ContactUs />&nbsp;<GalleryButton />
        </div>
      </div>
    </>
  );
}
