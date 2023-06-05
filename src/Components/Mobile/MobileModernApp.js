import "../../ModernApp.css";
import React, { useEffect, useRef, useState } from "react";
import ModernAppLoader from "../ModernAppLoader";
import AboutMobile from "./screens/AboutMobile";
import ResumeMobile from "./screens/ResumeMobile";
import TodayMobile from "./screens/TodayMobile";
import ProjectsMobile from "./screens/ProjectsMobile";
import ContactMobile from "./screens/ContactMobile";
import MyCursor from "../CustomCursor/MyCursor";
import BlockLetterLogo from "../../Images/blockLetterInitials.png";
import mobileNavBars from "../../Images/mobileNavBars.png";
import emailIcon from "../../Images/emailIcon.png";
import linkedInIcon from "../../Images/mobileNavBars.png";

//  Mobile version only has three main pages:
//    About       --> Explain desktop has full features
//    Resume      --> Mobile friendly version, encompassing skills, experience, etc.
//    Projects    --> All projects have a link. Non-hosted examples will havea component page, others point to GitHub or deployment link
//    Contact Me  --> E-mail, linkedin, github
//    Landing Page (Home) --> Main navigation

const MobileModernApp = ({ downgradeTheme }, { children }) => {
  const [isLoading, setLoading] = useState(true);
  const [nav, setNav] = useState({
    about: false,
    resume: false,
    projects: false,
    contact: false,
    home: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3999);
  }, []);

  const changePage = (navClicked) => {
    if (navClicked === "about")
      setNav({
        about: true,
        resume: false,
        projects: false,
        contact: false,
        home: false,
      });
    else if (navClicked === "resume")
      setNav({
        about: false,
        resume: true,
        projects: false,
        contact: false,
        home: false,
      });
    else if (navClicked === "projects")
      setNav({
        about: false,
        resume: false,
        projects: true,
        contact: false,
        home: false,
      });
    else if (navClicked === "contact")
      setNav({
        about: false,
        resume: false,
        projects: false,
        contact: true,
        home: false,
      });
    else if (navClicked === "home")
      setNav({
        about: false,
        resume: false,
        projects: false,
        contact: false,
        home: true,
      });
    // Home();
    console.log(nav);
  };

  const Home = () => {
    return (
      <>
        <div className="logoMobile">
          <img src={BlockLetterLogo} height="180vh" width="auto" />
        </div>
        <div className="homeDescMobile">
          {/* Each section is a button */}
          {/* On click, the section transitions to a new page */}
          {/* Scroll lock to assist with longer sections, like Projects */}
          {/* Color theme throughout */}

          {/* Still working to center home and screen buttons. Not responding to flex justify-content, likely due to parent container's position */}

          <div className="homeButton" onClick={() => changePage("about")}>
            <div className="mobileSlide">ABOUT</div>
          </div>
          <div className="homeButton" onClick={() => changePage("resume")}>
            <div className="mobileSlide">RESUMÉ</div>
          </div>
          <div className="homeButton" onClick={() => changePage("projects")}>
            <div className="mobileSlide">PROJECTS</div>
          </div>
          <div className="homeButton" onClick={() => changePage("contact")}>
            <div className="mobileSlide">CONTACT ME</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className="globalMobile"
      onMouseMove={(e) => {
        const cursor = document.querySelector(".cursor");
        cursor.style.left =
          e.pageX < window.innerWidth ? `${e.pageX}px` : cursor.style.left;
        cursor.style.top =
          e.pageY < window.innerHeight ? `${e.pageY}px` : cursor.style.top;
      }}
      onMouseDown={() => {
        const cursor = document.querySelector(".cursor");
        cursor.style.background = `#a7cae1`;
        cursor.style.transform = `scale(0.5) translate(-82.5%, -82.5%)`;
        cursor.style.opacity = `80%`;
        cursor.style.border = `2px solid lightgray`;
      }}
      onMouseUp={() => {
        const cursor = document.querySelector(".cursor");
        cursor.style.border = "";
        cursor.style.background = "";
        cursor.style.transform = `scale(1) translate(-50%, -50%)`;
        cursor.style.opacity = `60%`;
      }}
    >
      {/* Custom Cursor */}
      <MyCursor />
      {isLoading ? (
        <div className="loadContainerMobile">
          <div className="loadingBarMobile"></div>
        </div>
      ) : (
        ""
      )}
      <div className="modernContainerMobile">
        <div className="mobileNavIconContainer">
          <div className="mobileNavIcon" onClick={() => changePage("home")}>
            <img src={BlockLetterLogo} height="100%" />
          </div>
        </div>
        <div className="displayMobile">
          {nav.about ? (
            <AboutMobile />
          ) : nav.resume ? (
            <ResumeMobile />
          ) : nav.projects ? (
            <ProjectsMobile />
          ) : nav.contact ? (
            <ContactMobile />
          ) : nav.home ? (
            Home()
          ) : (
            "Something went wrong. Please try again."
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileModernApp;
