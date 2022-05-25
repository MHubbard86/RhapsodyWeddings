import React from "react";
import Hair from './Hair/Hair';
import Decor from './Decor/Decor';
import Header from './Header';
import './styles.css';

export default function Home () {
  return (
    <>
      <Header />      
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