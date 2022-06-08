import React from "react";
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery';
import Photos from './Photos';

export default function HomeImages() {
  return (
    <PhotoGallery
      photos={Photos}
      isLoop={true}
      showThumbs={false}
      autoPlay={true}
      showNav={false}
      showPlayButton={false}
      showBullets={false}
      showFullscreenButton={false}
    />
  );
}
