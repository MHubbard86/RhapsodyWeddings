import React from "react";
import Hair from './Hair/Hair';
import Decor from './Decor/Decor';
import { Link } from "react-router-dom";
import PageHeader from './PageHeader/PageHeader';
import './styles.css';

export default function Home () {
  return (
    <>
      <PageHeader /> 
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
            Specialist in Bridal hair, Venue styling and Props hire<br /><br />
            🌟Modern Bridal hair and Décor hire | Rustic / Boho specialist<br />
            🌟Essex based<br />
            🌟Full Bridal Hair Package - <strong>£350</strong> with up to 3 Bridemaids with
            💖complimentary Mother of the Bride<br />
            🌟Décor Package - <strong>£650</strong><br />
            🌟2023/2024 dates available<br />
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
            <div style={{ fontWeight: 'bold', fontSize: '14px'}}>
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
      <div className="homepage-pictures">
        <div className="homepage-gallery-wrap">
          <Hair />
        </div>
        <div className="homepage-gallery-wrap">
          <Decor />
        </div>
      </div>
    </>
  );
}
