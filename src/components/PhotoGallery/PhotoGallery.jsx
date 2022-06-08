import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = (props) => {
  const { photos, autoPlay, showThumbs, showNav, showPlayButton, showBullets, showFullscreenButton } = props;
  return <ImageGallery
    items={photos}
    autoPlay={autoPlay}
    showThumbnails={showThumbs}
    showNav={showNav}
    showPlayButton={showPlayButton}
    showBullets={showBullets}
    showFullscreenButton={showFullscreenButton}
  />
}

export default PhotoGallery;