
import React from "react";

export default function PageHeader(props) {
const { title, margin = '10px' } = props;
  return (
    <h2 className="text-center fw-bold" style={{ padding: margin}}>
      {title}
    </h2>
  )
}