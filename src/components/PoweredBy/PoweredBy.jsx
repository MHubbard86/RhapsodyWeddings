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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ width: '350px', marginRight: '80px', marginTop: '10px' }}>
          <HeaderPicture resume={data} />
          <Contacts resume={data} />
          {isEmpty(data.interests) ? null : <Interests resume={data} />}
        </div>
        <div>
          <HeaderLabel resume={data} />
          {isEmpty(data.skills) ? null : <Skills resume={data} />}
          {isEmpty(data.education) ? null : (
            <Education education={data.education} />
          )}
          {isEmpty(data.work) ? null : <Experience items={data.work} />}
        </div>
      </div>
    </div>
  );
};

function isEmpty(item) {
  return !item || item.length === 0;
}

export default PoweredBy;
