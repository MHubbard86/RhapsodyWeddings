import React from "react";
import Tag from "./Tag";

export default function Interests({ resume }) {
  return (
    <div>
      <h3 style={{ marginBottom: "0.5em", fontWeight: 700 }}>
        Interests and Hobbies
      </h3>
      {(resume.interests || []).map((item, k) => (
        <div key={k}>
          <Tag key={k} color="primary">
            {item.name}
          </Tag>
          <div>
            {(item.keywords || []).map((tag, k) => (
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
