import React from "react";
import FAQs from './Questions';

export default function FAQ() {
  return (
    <>
      <h1>Frequently Asked Questions (FAQs)</h1>
        <div style={{ margin: '20px' }}>
          {FAQs?.map((FAQ) => (
            <>
              <div className="leftContent title">{FAQ?.question}</div>
              <div className="leftContent">{FAQ?.answer}</div>
              <br />
            </>
          ))}
        </div>
    </>
  );
}
