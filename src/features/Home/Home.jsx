import React from "react";
import Hair from './Hair/Hair';
import Decor from './Decor/Decor';
import { Link } from "react-router-dom";
import './styles.css';

export default function Home () {
  return (
    <>
      <div className="homepage-description-wrap">
        <div className='centerContent'>
          <img
            src="../images/logo_main.jpg"
            className="d-inline-block"
            alt="Rhapsody Wedding Hair and Events "
            width='auto'
            height='180px'
          />
        </div>
        <div>
          <h3>Rhapsody Hair and Events</h3>
          <div className="homepage-wording-wrap">
            Our package includes <strong>10 items for £650</strong> where you can 
            hand pick the things you like the most or <strong>simply choose individual items</strong>.<br />
            Essex/Suffolk venues only.<br /><br />

            Planning your wedding can be so overwhelming and so stressful.<br />
            Our aim is to take the stress out of the planning and try to make it a fun.<br />
            So whether you have a specific theme or want bits and pieces.<br /> 
            I have at least something that will fit your wedding perfectly.<br />
            Take advantage of my bespoke package.<br />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px'}}>Recommended supplier for</div>
          <div>
            <a href='https://prested.co.uk/suppliers/' target="_blank" rel="noopener noreferrer">
              <img
                src="../images/prestedhall.png"
                className="d-inline-block"
                alt="Prested Hall"
                width='auto'
                height='20px'
              />
            </a>
          </div>
          <br />
          <div>
            <div className="blink" style={{ fontWeight: 'bold', fontSize: '14px'}}>
              Bespoke Handmade Cake Hoops
            </div>
            <Link to="/cakehoops">
              <img
                src="../images/cakehoops/main.jpg"
                className="d-inline-block"
                alt="Cake Hoops"
                width='auto'
                height='150px'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="homepage-gallery-wrap">
        <div><Hair /></div>
        <div><Decor /></div>
      </div>
    </>
  );
}
