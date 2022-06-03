import React from "react";
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery';
import Images from './Images';

export default function Hair() {
  return (
    <>
      <PhotoGallery photos={Images} />
    </>
  );
}
