import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = (props) => {
  const { Images } = props;
  return <ImageGallery
    items={Images}
    autoPlay={true}
    showNav={false} 
    showFullscreenButton={false}
    showPlayButton={false}
  />
}

export default Gallery;