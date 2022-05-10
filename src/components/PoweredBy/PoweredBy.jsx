import React from "react";
import "./styles/module.css";
import Interests from "./Interests";
import Skills from "./Skills";
import Contacts from "./Contacts";
import HeaderPicture from "./HeaderPicture";
import HeaderLabel from "./HeaderLabel";
import Experience from "./Experience";
import Education from "./Education";
import data from "./data/data";

const PoweredBy = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap' }} >
      <div style={{ justifyContent: 'center', width: '50%', margin: '20px' }}>
        <Contacts resume={data} />
        <HeaderLabel resume={data} />
        <HeaderPicture resume={data} />
        {data.skills && <Skills resume={data} />}
        {data.education && <Education education={data.education} />}
        {data.work && <Experience items={data.work} />}
        {data.interests && <Interests resume={data} />}
      </div>
    </div>
  );
};

export default PoweredBy;
