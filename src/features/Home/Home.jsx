import React from "react";
import Gallery from '../Gallery/Gallery';
import './styles.css';

export default function Home () {
  return (
    <>
      <div className="homepage-description-wrap">
        <div className='centerContent'>
          <img
            src="../images/logo_main.jpg"
            width="200"
            className="d-inline-block"
            alt="Rhapsody Wedding Hair and Events Hire"
          />
          </div>
          <div>
            <h3>Professional Wedding Hair and Décor styling</h3>
            <div className="homepage-wording-wrap">
              Planning your wedding can be so overwhelming and so stressful.<br />
              Our aim is to take the stress out of the planning and try to make it a fun.<br />
              So whether you have a specific theme or want bits and pieces.<br /> 
              I have at least something that will fit your wedding perfectly.<br />
              Take advantage of my bespoke package.<br />
              Our package includes <strong>10 items for £600</strong> where you can hand pick the things you like the most or simply choose individual items.<br />
              The choice is completely yours.<br />
              Here's a little snippet of some of the items we have.<br />
              If there is anything there that you don't see please pop a message.
            </div>
          </div>
      </div>
      <div className="homepage-gallery-wrap">
        <div>
          <Gallery />
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}
