
import React from "react";

export default function PageHeader(props) {
const { title } = props;
  return (
    <h2 className="text-center heading-title">
      {title}
    </h2>
  )
}

export function PageParagraph(props) {
  const { text, endIcon } = props;
    return (
      <div className="text-center heading-paragraph">{text} {endIcon}</div>
    )
  }