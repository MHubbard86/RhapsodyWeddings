import React from "react";

export default function Tag({ color, children }) {
  return (
    <span
      style={{
        backgroundColor: color === "secondary" ? "#48BFE3" : "darkblue",
        color: "white",
        borderRadius: "4px",
        padding: "0px 4px 2px 4px",
        marginLeft: "4px",
        boxSizing: "border-box",
        fontSize: "smaller",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}
