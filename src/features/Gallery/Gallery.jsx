import React from "react";
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Images from './Images';
import Favourites from './Favourites';

export default function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <div style={{ width: '100%' }}>
        <ImageGallery Images={Favourites} />
      </div>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <PhotoGallery photos={Images} />
      </div>
    </>
  );
}
