import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function EmailIcon(props) {
  const { fontSize = '1.5rem', color = 'rgba(0,0,0,.5)', marginRight= '5px' } = props;
  return (
    <a
        href='mailto:rhapsodyhairandevents@gmail.com'
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
    >
        <AiOutlineMail style={{ fontSize, color, marginRight }} />
    </a>
  )
}