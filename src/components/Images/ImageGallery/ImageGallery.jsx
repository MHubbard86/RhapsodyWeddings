import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Images from './Images';


const Gallery = () => {
  return <ImageGallery items={Images} autoPlay={true} />;
}

export default Gallery;