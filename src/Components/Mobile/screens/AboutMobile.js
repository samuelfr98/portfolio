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
    if (tab == "skills") {
      setOpenedTabs({
        bio: false,
        skills: !openedTabs.skills,
        resume: false,
        interests: false,
      });
    }
    if (tab == "resume") {
      setOpenedTabs({
        bio: false,
        skills: false,
        resume: !openedTabs.resume,
        interests: false,
      });
    }
    if (tab == "interests") {
      setOpenedTabs({
        bio: false,
        skills: false,
        resume: false,
        interests: !openedTabs.interests,
      });
    }
  };

  return (
    <div className="mobileScreen">
      <div className="screenHeaderMobile">about</div>
      <div className="screenContainerMobile">
        <div className="screenButton" onClick={() => handleOpenedTab("bio")}>
          <p>bio</p>
          {openedTabs.bio ? (
            <div className="bioMobile">
              <div>
                I’m Sam Friedman, a versatile, motivated problem solver from
                Baton Rouge, LA.
              </div>
              <div>
                Throughout internships, undergrad courses in computer science
                and entrepreneurship, and my career, I have learned to
                appreciate the design thinking process. Whether collaborating
                with start ups fueled by LEAN thinking or contributing to more
                structured projects anchored by agile workflows, I prioritize
                strategy, efficiency and longevity when designing and
                implementing a solution.
              </div>
              <div>
                I often use JavaScript, ReactJS, CSS and HTML for frontend
                development. For backend development, maintenance, continuous
                deployment and continuous integration, I often turn to AWS
                Amplify and GitHub. When analyzing data, I frequently leverage
                PL-SQL as well as Python.{" "}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="screenButton" onClick={() => handleOpenedTab("skills")}>
          <p>skills</p>
          {openedTabs.skills ? (
            <div className="bioMobile">
              <div>
                <ul>
                  <li>reactjs</li>
                  <li>java</li>
                  <li>aws</li>
                  <li>pl/sql</li>
                  <li>git</li>
                  <li>design thinking methodologies</li>
                  <li>informatica</li>
                  <li>leadership</li>
                  <li>confluent kafka</li>
                  <li>python</li>
                  <li>distributed databases</li>
                  <li>css</li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className="screenButton"
          onClick={() => handleOpenedTab("interests")}
        >
          <p>interests</p>
          {openedTabs.interests ? (
            <div className="bioMobile">
              <div>
                <ul>
                  <li>rock climbing</li>
                  <li>travel</li>
                  <li>cooking</li>
                  <li>
                    coding (raspberry pi, stock predictor RNN, projects, etc.)
                  </li>
                  <li>reading</li>
                  <li>sustainability</li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="screenButton" onClick={() => handleOpenedTab("resume")}>
          <p>resume</p>
          {openedTabs.resume ? (
            <div className="bioMobile">
              <div>resume</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
