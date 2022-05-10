import React from "react";
import Tag from "./Tag";
import TimeLine from "./Timeline";
import "./styles/module.css";

export default function Skills({ resume }) {
  return (
    <>
      <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>Skills</h3>
      {resume.skills.map((item, k) => (
        <div key={k} style={{ position: "relative" }}>
          <TimeLine isSkills={true} isLast={k === resume.skills.length - 1} />
          <div>
            <strong>{item.name}</strong>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {item?.skill?.map((logo, k) => (
              <div key={k}>
                <Tag color="secondary">
                  {logo.name}
                </Tag>
                {logo?.image && 
                  <img
                    src={logo.image}
                    style={{ height: "25px", marginLeft: '5px', marginRight: '2px' }}
                    alt={logo.image}
                  />
                  }
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}


