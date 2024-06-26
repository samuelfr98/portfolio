import "../RetroApp.css";
import TitleBar from "./TitleBar";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Resume from "./UndergradRetro";
import UpgradeBox from "./UpgradeBox";
import githubLogo from "../Images/githubLogo.png";
import linkedInLogo from "../Images/linkedInLogo.png";
import TodayRetro from "./TodayRetro";
import UndergradRetro from "./UndergradRetro";
import ProjectsRetro from "./ProjectsRetro";

import { useEffect, useState } from "react";

const RetroApp = ({ upgradeTheme, theme }) => {
  // About page with bio from linkedIn                --- Check
  // Undergrad summary with UNC logo                  ---
  // Today page with IBM info and certifications      ---
  // Projects page                                    ---
  // Contact page                                     ---
  // Blog                                             ---
  // Home                                             ---
  const [state, setState] = useState({
    aboutme: false,
    undergrad: false,
    // today: false,
    projects: false,
    contactme: false,
    //    blog: false,
    github: false,
    linkedin: false,
    home: false,
  });

  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [beginUpdate, setBeginUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4490);
  }, []);

  const redirect = (url) => {
    if (url === "About Me")
      setState({
        aboutme: true,
        undergrad: false,
        today: false,
        projects: false,
        contactme: false,
        github: false,
        linkedin: false,
        home: false,
      });
    else if (url === "Undergrad")
      setState({
        aboutme: false,
        undergrad: true,
        today: false,
        projects: false,
        contactme: false,
        github: false,
        linkedin: false,
        home: false,
      });
    else if (url === "Contact Me")
      setState({
        aboutme: false,
        undergrad: false,
        today: false,
        projects: false,
        contactme: true,
        github: false,
        linkedin: false,
        home: false,
      });
    else if (url === "https://github.com/samuelfr98") {
      setState({
        aboutme: false,
        undergrad: false,
        today: false,
        projects: false,
        contactme: false,
        github: true,
        linkedin: false,
        home: false,
      });
      window.open(url, "_blank").focus();
    } else if (url === "https://www.linkedin.com/in/sam-friedman-b8852118a") {
      setState({
        aboutme: false,
        undergrad: false,
        today: false,
        projects: false,
        contactme: false,
        github: false,
        linkedin: true,
        home: false,
      });
      window.open(url, "_blank").focus();
    } else if (url === "Home") {
      setState({
        aboutme: false,
        undergrad: false,
        today: false,
        projects: false,
        contactme: false,
        github: false,
        linkedin: false,
        home: true,
      });
    } else if (url === "Today") {
      setState({
        aboutme: false,
        undergrad: false,
        today: true,
        projects: false,
        contactme: false,
        github: false,
        linkedin: false,
        home: false,
      });
    } else if (url === "Projects") {
      setState({
        aboutme: false,
        undergrad: false,
        today: false,
        projects: true,
        contactme: false,
        github: false,
        linkedin: false,
        home: false,
      });
    }
    // console.log(state);
  };

  const showPage = (state) => {
    if (state.aboutme) return <AboutMe />;
    else if (state.undergrad) return <UndergradRetro />;
    else if (state.contactme) return <ContactMe />;
    // else if (state.today) return <TodayRetro />;
    else if (state.projects) return <ProjectsRetro />;
    else if (state.contactme) return <ContactMe />;
    else if (state.github)
      return (
        <img src={githubLogo} alt="GitHub Logo" height="100%" width="100%" />
      );
    else if (state.linkedin)
      return (
        <img
          src={linkedInLogo}
          alt="LinkedIn Logo"
          height="100%"
          width="100%"
        />
      );
    else
      return (
        <div className="homePage">
          <h1 className="">Welcome to Sam Friedman's Portfolio!</h1>
          <p>
            Sam was born in 1998, and this website looks like it hasn't been
            updated since then. <br /> <br />
            Explore the retro theme, and check out the bottom right corner if
            you think the site could use an upgrade!
          </p>
        </div>
      );
  };

  return (
    <div className="RetroApp">
      {loading ? (
        <div className="retroAppLoader">
          <div className="retroAppLoadingBar">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        <TitleBar />
        <div className="fileBar">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Image</button>
          <button>Options</button>
          <button>Help</button>
        </div>
      </div>
      <div className="sideAndBoard">
        {beginUpdate ? (
          <UpgradeBox cancelled={setBeginUpdate} upgrade={upgradeTheme} />
        ) : (
          ""
        )}
        <div className="sideBar">
          <div className="sideButton">
            <button onClick={() => redirect("About Me")}>About Me</button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("Undergrad")}>Undergrad</button>
          </div>
          {/* <div className="sideButton">
            <button onClick={() => redirect("Today")}>Today</button>
          </div> */}
          <div className="sideButton">
            <button onClick={() => redirect("Projects")}>Projects</button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("Contact Me")}>Contact Me</button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("https://github.com/samuelfr98")}>
              GitHub
            </button>
          </div>
          <div className="sideButton">
            <button
              onClick={() =>
                redirect("https://www.linkedin.com/in/sam-friedman-b8852118a")
              }
            >
              LinkedIn
            </button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("Home")}>Home</button>
          </div>
        </div>
        <div className="paintBoard">
          <div className="whiteArea">{showPage(state)}</div>
        </div>
      </div>
      <div className="belowPaintBoard">
        <div className="belowSideBar"></div>
        <div className="belowPaint">
          {!showUpdateBox && !beginUpdate ? (
            <>
              <div></div>
              <div className="upgradeButton">
                <button onMouseEnter={() => setShowUpdateBox(true)}>!</button>
              </div>
            </>
          ) : showUpdateBox && !beginUpdate ? (
            <>
              <div></div>
              <div
                className="dialogueBox"
                onMouseLeave={() => setShowUpdateBox(false)}
              >
                <button
                  onClick={() => {
                    setBeginUpdate(true);
                    setShowUpdateBox(false);
                  }}
                >
                  Click to upgrade to modern theme
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default RetroApp;
