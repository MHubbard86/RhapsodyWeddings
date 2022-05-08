import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineLaptop,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const IconSize = "3em";

const Icon = ({ url }) => {
  const u = url.toLowerCase();
  if (u.indexOf("github") >= 0) {
    return <AiOutlineGithub size={IconSize} />;
  }
  if (u.indexOf("linkedin") >= 0) {
    return <AiFillLinkedin size={IconSize} />;
  }
  return null;
};

export default function Contacts({ resume }) {
  return (
    <div style={{ marginBottom: "0.5em" }}>
      <h3
        style={{
          marginBottom: "0.5em",
          fontWeight: 700,
        }}
      >
        Contact and Profile
      </h3>
      <div>
        <AiOutlineMail size={IconSize} />
        <a className="addLink" href={`mailto:${resume.basics.email}`}>
          {resume.basics.email}
        </a>
      </div>
      <div>
        <AiOutlinePhone size={IconSize} />
        {resume.basics.phone}
      </div>
      <div>
        <AiOutlineLaptop size={IconSize} />
        <a
          className="addLink"
          href={resume.basics.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {resume.basics.website}
        </a>
      </div>
      {(resume.basics.profiles || []).map((p, k) => (
        <div key={k}>
          <Icon url={p.url} />
          <a
            className="addLink"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            {p.username}
          </a>
        </div>
      ))}
    </div>
  );
}
