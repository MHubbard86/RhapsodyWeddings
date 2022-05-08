import React from "react";
import { IoBuild } from "react-icons/io5";

export default function HeaderLabel({ resume }) {
  return (
    <>
      <div style={{ marginTop: 40 }}>
        <h1>{resume.basics.name}</h1>
        <h5 style={{ marginTop: -20 }}>
          {resume.basics.label}
          <IoBuild />
        </h5>
      </div>
    </>
  );
}
