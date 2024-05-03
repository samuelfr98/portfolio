import "../ModernApp.css";
import React, { useState, useEffect, useRef } from "react";
import NonGithubProject from "./NonGithubProject";

const ProjectCard = (props) => {
  // Is front side showing? T/F

  const tools = props.tools;
  const [isPreviewed, setIsPreviewed] = useState(false);

  const preview = () => {
    return (
      <div
        className="projectPreview"
        onClick={() =>
          !props.link == ""
            ? window.open(props.link, "_blank").focus()
            : setIsPreviewed(!isPreviewed)
        }
      >
        <div className="leftProjCard">
          <div className="projectTitle">
            <h4>{props.title}</h4>
          </div>
          <div className="projectDesc">{props.desc}</div>
        </div>
        <div className="rightProjCard">
          <div className="projectTools">
            {tools.map((t) => (
              <div>{t}</div>
            ))}
          </div>
          <div className="projectLink">Click the card to learn more!</div>
        </div>
      </div>
    );
  };


  return (
    <div className="projectCardContainer">
      <div className="projectCard">
        {!isPreviewed ? (
          preview()
        ) : (
          <NonGithubProject />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
