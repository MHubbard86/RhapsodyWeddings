import React from "react";
import Tag from "./Tag";
import TimeLine from "./Timeline";
import "./styles/module.css";

export default function Skills({ resume }) {
  return (
    <div style={{ marginTop: 70, marginBottom: "1em" }}>
      <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>Skills</h3>
      {resume.skills.map((item, k) => (
        <div key={k} style={{ position: "relative" }}>
          <TimeLine isSkills={true} isLast={k === resume.skills.length - 1} />
          <div>
            <strong>{item.name}</strong>
          </div>
          <div>
            {item.keywords.map((tag, k) => (
              <Tag key={k} color="secondary">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
