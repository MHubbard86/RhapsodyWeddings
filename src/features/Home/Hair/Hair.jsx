import React from "react";
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery';
import Images from './Images';

export default function Hair() {
  return (
    <>
      <h3>Hair</h3>
      <div style={{ width: '100%' }}>
        <PhotoGallery photos={Images} />
      </div>
    </>
  );
}
