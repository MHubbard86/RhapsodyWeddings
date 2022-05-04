import React from "react";
import ImageGallery from '../../components/Images/ImageGallery/ImageGallery';
import ImageSlider from "../../components/Images/ImageSlider/ImageSlider";
import VideoCarousel from '../../components/Video/Video';
import Images from './Images';

export default function Packages() {
  return (
    <>
      <h1>Packages</h1>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <ImageGallery Images={Images} />
      </div>  
      <div style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
        <ImageSlider />
      </div>  
      <div style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
        <VideoCarousel />
      </div> 
    </>
  );
}
