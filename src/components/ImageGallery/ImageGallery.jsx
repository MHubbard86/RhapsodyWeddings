import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = (props) => {
  const { Images, slideInterval = 5000 } = props;
  return <ImageGallery
    items={Images}
    autoPlay={true}
    showNav={true} 
    showFullscreenButton={true}
    showPlayButton={true}
    slideInterval={slideInterval}
  />
}

export default Gallery;