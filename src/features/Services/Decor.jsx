import React from "react";
import Button from '../../components/Buttons/Button';
import './styles.css';

export default function DecorService() {
  return (
    <>
      <div className="service-package">
        <div>
          <h3>Full Décor Package</h3>
          <h4>£650</h4>
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
          <h6>Please enquire here to get started or see more examples within our Gallery</h6>
          <Button link="/email" text="Enquire Here" />
          &nbsp;
          <Button link="/gallery#decor" text="Gallery" />
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
