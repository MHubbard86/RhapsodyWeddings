import React from "react";
import { IoBuild } from "react-icons/io5";

export default function HeaderLabel({ resume }) {
  return (
    <>
      <h1>{resume.basics.name}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop: "10px" }}>
        <h5>
          {resume.basics.label}
          <IoBuild />
        </h5>
      </div>
    </>
  );
}
