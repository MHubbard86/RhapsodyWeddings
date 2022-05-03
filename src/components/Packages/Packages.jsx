import React from "react";
import ImageGallery from '../Images/ImageGallery/ImageGallery';
import ImageSlider from "../Images/ImageSlider/ImageSlider";
import VideoCarousel from '../Carousel/Video';

export default function Packages() {
  return (
    <>
      <h1>Packages</h1>
      <div style={{ width: '70%', marginTop: '20px' }}>
        <ImageGallery />
      </div>  
      <div style={{ width: '70%', marginTop: '20px', marginBottom: '20px' }}>
        <ImageSlider />
      </div>  
      <div style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
        <VideoCarousel />
      </div> 
    </>
  );
}
