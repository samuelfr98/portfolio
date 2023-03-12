import "../../ModernApp.css";
import React, { useEffect, useRef, useState } from "react";
import ModernAppLoader from "../ModernAppLoader";
import AboutMobile from "./screens/AboutMobile";
import UndergradMobile from "./screens/UndergradMobile";
import TodayMobile from "./screens/TodayMobile";
import ProjectsMobile from "./screens/ProjectsMobile";
import ContactMobile from "./screens/ContactMobile";
import MyCursor from "../CustomCursor/MyCursor";
import BlockLetterLogo from "../../Images/blockLetterInitials.png";
import githubIcon from "../../Images/githubIcon.png";
import emailIcon from "../../Images/emailIcon.png";
import linkedInIcon from "../../Images/linkedInIcon.png";

const MobileModernApp = ({ downgradeTheme }, { children }) => {
  const [isLoading, setLoading] = useState(true);
  const [nav, setNav] = useState({
    about: false,
    undergrad: false,
    today: false,
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
        undergrad: false,
        today: false,
        projects: false,
        contact: false,
        home: false,
      });
    else if (navClicked === "undergrad")
      setNav({
        about: false,
        undergrad: true,
        today: false,
        projects: false,
        contact: false,
        home: false,
      });
    else if (navClicked === "today")
      setNav({
        about: false,
        undergrad: false,
        today: true,
        projects: false,
        contact: false,
        home: false,
      });
    else if (navClicked === "projects")
      setNav({
        about: false,
        undergrad: false,
        today: false,
        projects: true,
        contact: false,
        home: false,
      });
    else if (navClicked === "contact")
      setNav({
        about: false,
        undergrad: false,
        today: false,
        projects: false,
        contact: true,
        home: false,
      });
    else if (navClicked === "home")
      setNav({
        about: false,
        undergrad: false,
        today: false,
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
          <img src={BlockLetterLogo} height="auto" width="auto" />
        </div>
        <div className="homeDescMobile">
          <div className="homeButton" onClick={() => changePage("about")}>
            <p>about</p>
          </div>
          <div className="homeButton" onClick={() => changePage("undergrad")}>
            <p>undergrad</p>
          </div>

          <div className="homeButton" onClick={() => changePage("today")}>
            <p>career</p>
          </div>
          <div className="homeButton" onClick={() => changePage("projects")}>
            <p>projects</p>
          </div>
          <div
            className="homeButton"
            onClick={() => changePage("contact")}
          >
            <p>contact</p>
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
      {isLoading ? <ModernAppLoader /> : ""}
      <div className="modernContainerMobile">
        <div className="mobileNavIconContainer">
          <div className="mobileNavIcon" onClick={() => changePage("home")}>
            <img src={githubIcon} height="100%" />
          </div>
        </div>
        <div className="displayMobile">
          {nav.about ? (
            <AboutMobile />
          ) : nav.undergrad ? (
            <UndergradMobile />
          ) : nav.today ? (
            <TodayMobile />
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
