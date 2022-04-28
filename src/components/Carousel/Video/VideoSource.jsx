import React from "react";

const VideoSource = (props) => {
  return (
    <video
      height={props.height}
      width={props.width}
      className="video-fluid d-block"
      autoPlay
      loop
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
};
export default VideoSource;
