import React from "react";
import ImageGallery from '../../components/Images/ImageGallery/ImageGallery';
import Images from './Images';

export default function Reviews() {
  return (
    <>
      <h1>Reviews</h1>
      <div style={{ width: '70%', marginTop: '20px' }}>
        <ImageGallery Images={Images} />
      </div>  
    </>
  );
}
