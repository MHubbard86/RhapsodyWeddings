import React from "react";
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Images from './Images';

export default function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <ImageGallery Images={Images} slideInterval={3000} />
      </div>
    </>
  );
}
