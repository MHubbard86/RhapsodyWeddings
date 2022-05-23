import React from "react";

export default function HeaderPicture({ resume }) {
  return (
    <>
      <div>
        <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>Summary</h3>
        <p>{resume.basics.summary}</p>
      </div>
    </>
  );
}
