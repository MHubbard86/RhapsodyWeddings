import React from "react";
import { Carousel } from "react-bootstrap";

export default function () {
  return (
    <div>
      <div className="container-fluid">
        <Carousel
          interval={2000}
          fade={true}
          style={{ height: "300px", width: "500px" }}
        >
          <CarouselItem image='/images/shoe1.jpg' alt='' />
          <CarouselItem image='/images/shoe2.jpg' alt='' />
          <CarouselItem image='/images/shoe3.jpg' alt='' />
        </Carousel>
      </div>
    </div>
  );
}

const CarouselItem = (image, alt) => {
  return (
    <Carousel.Item>
      <img className="d-block w-200" src={image} alt={alt} />
    </Carousel.Item>
  );
}
