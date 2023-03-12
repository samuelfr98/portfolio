import React from "react";

const AboutMobile = () => {
  return (
    <div className="">
      <div className="screenHeaderMobile">
        about
      </div>
      <div className="screenContainerMobile">
        <div className="screenButton" onClick={() => ''}>
          <p>bio</p>
          {/* <img>open</img> */}
        </div>
        <div className="screenButton" onClick={() => ''}>
          <p>skills</p>
        </div>

        <div className="screenButton" onClick={() => ''}>
          <p>interests</p>
        </div>
        <div className="screenButton" onClick={() => ''}>
          <p>resume</p>
        </div>

      </div>
    </div>
  );
};

export default AboutMobile;
