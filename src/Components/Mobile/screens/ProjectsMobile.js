import React from "react";

const ProjectsMobile = () => {
  return (
    <div className="mobileScreen">
      <div className="screenHeaderMobile">projects</div>
      <div className="screenContainerMobile">
        <div className="screenButton" onClick={() => ""}>
          <p>projects</p>
          {/* <img>open</img> */}
        </div>
        <div className="screenButton" onClick={() => ""}>
          <p>dynamically render all projects with scrolling and expansion</p>
        </div>

      </div>
    </div>
  );
};

export default ProjectsMobile;
