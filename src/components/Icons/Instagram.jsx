import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export default function InstagramIcon(props) {
  const { fontSize = '1.5rem', color = 'rgba(0,0,0,.5)' } = props;
  return (
    <a href='https://www.instagram.com/rhapsody_hairand_events/'
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
    >
        <AiOutlineInstagram style={{ fontSize, color }} />
    </a>    
  )
}