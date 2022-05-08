import React from "react";
import { DateTime } from "luxon";

export default function Period({ startDate, endDate }) {
  return (
    <span style={{ width: 220, fontWeight: 700, textAlign: "right" }}>
      <span>
        {DateTime.fromFormat(startDate, "yyyy-MM-dd").toFormat("MMMM yyyy")}
      </span>
      <span>&nbsp;-&nbsp;</span>
      <span>
        {endDate
          ? DateTime.fromFormat(endDate, "yyyy-MM-dd").toFormat("MMMM yyyy")
          : "now"}
      </span>
    </span>
  );
}
