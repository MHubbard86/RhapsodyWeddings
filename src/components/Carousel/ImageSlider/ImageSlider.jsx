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
          <Carousel.Item>
            <img className="d-block w-200" src={"/images/shoe1.jpg"} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-200" src={"/images/shoe2.jpg"} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-200" src={"/images/shoe3.jpg"} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
