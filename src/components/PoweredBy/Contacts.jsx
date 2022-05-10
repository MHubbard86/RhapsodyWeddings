import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineLaptop,
  AiOutlineMail,
} from "react-icons/ai";

const IconSize = "2em";

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
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <div>          
          <a className="addLink" href={`mailto:${resume.basics.email}`}>
            <AiOutlineMail size={IconSize} />
          </a>
        </div>
        {resume.basics.website && 
          <div>
            <a
              className="addLink"
              href={resume.basics.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLaptop size={IconSize} />
            </a>
          </div>
        }
        {(resume.basics.profiles || []).map((p, k) => (
          <div key={k}>
            <a
              className="addLink"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <Icon url={p.url} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
