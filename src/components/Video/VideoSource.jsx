import React from "react";

const VideoSource = (props) => {
  return (
    <video
      height={props.height}
      width={props.width}
      className="video-fluid d-block"
      controls={props.controls}
      autoPlay={props.autoPlay}
      loop={props.loop}
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
};
export default VideoSource;
