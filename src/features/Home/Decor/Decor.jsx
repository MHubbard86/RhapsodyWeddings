import React from "react";
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery';
import Images from './Images';

export default function Decor() {
  return (
    <>
      <h3>Décor</h3>
      <div style={{ width: '100%' }}>
        <PhotoGallery Images={Images} />
      </div>
    </>
  );
}
