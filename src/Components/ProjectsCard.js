import "../ModernApp.css";
import React, { useState, useEffect, useRef } from "react";

const ProjectCard = (props) => {
  // Is front side showing? T/F

  const tools = props.tools;

  const preview = () => {
    return (
      <div
        className="projectPreview"
        onClick={() =>
          window
            .open(
              props.link,
              "_blank"
            )
            .focus()
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
          {/* <div className="projectLink">{props.link}</div> */}
        </div>
      </div>
    );
  };

  return (
    <div className="projectCardContainer">
      <div className="projectCard">{preview()}</div>
    </div>
  );
};

export default ProjectCard;
