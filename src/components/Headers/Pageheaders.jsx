
import React from "react";

export default function PageHeader(props) {
const { title, marginTop = '10px' } = props;
  return (
    <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: marginTop}}>
      {title}
    </h3>
  )
}