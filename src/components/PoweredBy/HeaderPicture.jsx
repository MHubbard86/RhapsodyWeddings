import React from "react";

export default function HeaderPicture({ resume }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={resume.basics.picture}
          style={{ height: "150px", borderRadius: "100%" }}
          alt="LinkedIn profile"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>Summary</h3>
        <p>{resume.basics.summary}</p>
      </div>
    </>
  );
}
