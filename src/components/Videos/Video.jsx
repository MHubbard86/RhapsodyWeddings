import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import VideoSource from "./VideoSource";

const VideoCarousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls
      showIndicators
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <VideoSource src={"../videos/Tropical.mp4"} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <VideoSource src={"../videos/forest.mp4"} />
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <VideoSource src={"../videos/Agua-natural.mp4"} />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
export default VideoCarousel;
