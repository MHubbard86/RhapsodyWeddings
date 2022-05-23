import React from "react";
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery';
import Images from './Images';

export default function Decor() {
  return (
    <>
      <PhotoGallery photos={Images} />
    </>
  );
}
