import React from "react";
import TimeLine from "./Timeline";
import Period from "./Period";

export default function Education({ education }) {
  return (
    <div style={{ marginTop: "0.5em" }}>
      <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>Education</h3>
      {education.map((item, k) => (
        <div key={k} style={{ position: "relative" }}>
          <TimeLine isLast={k === education.length - 1} />
          <h5 style={{ marginBottom: 0 }}>{item.institution}</h5>
          <span
            style={{
              margin: "2px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              className="addLink"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.website}
            </a>
            <Period startDate={item.startDate} endDate={item.endDate} />
          </span>
          <p>
            {item.area} - {item.studyType}
          </p>
        </div>
      ))}
    </div>
  );
}
