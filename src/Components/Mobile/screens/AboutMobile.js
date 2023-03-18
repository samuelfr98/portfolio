import React from "react";
import { useState } from "react";

const AboutMobile = () => {
  const [openedTabs, setOpenedTabs] = useState({
    bio: false,
    skills: false,
    resume: false,
    interests: false,
  });

  const handleOpenedTab = (tab) => {
    if (tab == "bio") {
      setOpenedTabs({
        bio: !openedTabs.bio,
        skills: false,
        resume: false,
        interests: false,
      });
    }
  };

  return (
    <div className="">
      <div className="screenHeaderMobile">about</div>
      <div className="screenContainerMobile">
        <div className="screenButton" onClick={() => handleOpenedTab("bio")}>
          <p>bio</p>
          {openedTabs.bio ? (
            <div className="bioMobile">
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                wtfff
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="screenButton" onClick={() => ""}>
          <p>skills</p>
        </div>

        <div className="screenButton" onClick={() => ""}>
          <p>interests</p>
        </div>
        <div className="screenButton" onClick={() => ""}>
          <p>resume</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
