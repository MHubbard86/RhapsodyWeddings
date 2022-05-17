import React from "react";
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Images from './Images';

export default function Cakehoops() {
  return (
    <>
      <h1>Cake Hoops</h1>
      <div style={{ margin: '20px' }}>
        <div>
          Our Prices start from £65 for our bespoke Cake Hoops made to your individual request.
        </div>
        <div style={{ width: '100%', marginTop: '20px' }}>
          <ImageGallery Images={Images} slideInterval={4000} />
        </div>
      </div>
    </>
  );
}
