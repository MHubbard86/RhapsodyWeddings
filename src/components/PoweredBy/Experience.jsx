import React from "react";
import TimeLine from "./Timeline";
import Period from "./Period";

export default function Experience({ items }) {
  return (
    <div style={{ marginTop: "0.5em" }}>
      <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>
        Work Experience
      </h3>
      {items.map((item, k) => (
        <div key={k} style={{ position: "relative" }}>
          {items.length === 1 ? null : (
            <TimeLine isLast={k === items.length - 1} />
          )}
          <h5 style={{ marginBottom: 0 }}>{item.position}</h5>
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
              {item.company}
              {/ICSA/.test(item.company) ? " (dissolved)" : ""}
            </a>
            <Period startDate={item.startDate} endDate={item.endDate} />
          </span>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
  );
}
