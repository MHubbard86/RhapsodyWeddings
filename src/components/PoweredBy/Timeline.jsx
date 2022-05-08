import React from "react";

export default function Timeline({ isLast, isSkills }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 24,
          height: 24,
          border: "1px solid red",
          borderRadius: "100%",
          left: -30,
          top: 3,
          padding: 6,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: "red",
            borderRadius: "100%",
          }}
        ></div>
      </div>
      {isLast ? null : (
        <div
          style={{
            position: "absolute",
            width: 2,
            left: -19,
            top: 27,
            bottom: isSkills ? -4 : -20,
            backgroundColor: "red",
          }}
        ></div>
      )}
    </>
  );
}
