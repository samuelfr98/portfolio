import "../../ModernApp.css";
import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import ModernAppLoader from "../ModernAppLoader";
import About from "../About";
import Undergrad from "../Undergrad";
import Today from "../Today";
import Projects from "../Projects";
import Contact from "../Contact";
import BioCard from "../BioCard";
import MyCursor from "../CustomCursor/MyCursor";
import Blog from "../Blog";
import BlockLetterLogo from "../../Images/blockLetterInitials.png";
import { ReactComponent as ScrollingSVG } from "../../Images/ScrollingSVG.svg";
import githubIcon from "../../Images/githubIcon.png";
import emailIcon from "../../Images/emailIcon.png";
import linkedInIcon from "../../Images/linkedInIcon.png";

const MobileModernApp = ({ downgradeTheme }, { children }) => {
  const [isLoading, setLoading] = useState(true);
  const [picSlide, setPicSlide] = useState(true);
  const [revisit, setRevisit] = useState(true);
  const [nav, setNav] = useState({
    about: false,
    undergrad: false,
    today: false,
    projects: false,
    contact: false,
    blog: false,
    home: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3950);

    setTimeout(() => {
      setPicSlide(false);
    }, 7000);
  }, []);

  const changePage = (navClicked) => {
    if (navClicked === "about")
      setNav({
        about: true,
        undergrad: false,
        today: false,
        projects: false,
        contact: false,
        blog: false,
        home: false,
      });
    else if (navClicked === "undergrad")
      setNav({
        about: false,
        undergrad: true,
        today: false,
        projects: false,
        contact: false,
        blog: false,
        home: false,
      });
    else if (navClicked === "today")
      setNav({
        about: false,
        undergrad: false,
        today: true,
        projects: false,
        contact: false,
        blog: false,
        home: false,
      });
    else if (navClicked === "projects")
      setNav({
        about: false,
        undergrad: false,
        today: false,
        projects: true,
        contact: false,
        blog: false,
        home: false,
      });
    else if (navClicked === "contact")
      setNav({
        about: false,
        undergrad: false,
        today: false,
        projects: false,
        contact: true,
        blog: false,
        home: false,
      });
    else if (navClicked === "home")
      setNav({
        about: false,
        undergrad: false,
        today: false,
        projects: false,
        contact: false,
        blog: false,
        home: true,
      });
    Home();
  };

  const Home = () => {
    return (
      <div className="contentContainer">
        <div className="content">
          hi
        </div>
      </div>
    );
  };

  return (
    <div
      className="global"
      onMouseMove={(e) => {
        const cursor = document.querySelector(".cursor");
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
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
        <div className="topBarMobile">
          <div className="navbarMobile">
            <div onClick={() => changePage("about")}>about</div>
            <div onClick={() => changePage("undergrad")}>undergrad</div>
            <div onClick={() => changePage("today")}>today</div>
            <div onClick={() => changePage("projects")}>projects</div>
            <div onClick={() => changePage("contact")}>contact</div>
            <div onClick={() => downgradeTheme("retro")}>retro</div>
          </div>
          <div className="contactIcons">
            <div
              className="linkedInIcon"
              onClick={() =>
                window
                  .open(
                    "https://www.linkedin.com/in/sam-friedman-b8852118a",
                    "_blank"
                  )
                  .focus()
              }
            >
              <img src={linkedInIcon} />
            </div>
            <div
              className="githubIcon"
              onClick={() =>
                window.open("https://github.com/samuelfr98", "_blank").focus()
              }
            >
              <img src={githubIcon} />
            </div>
            <div className="emailIcon" onClick={() => changePage("contact")}>
              <img src={emailIcon} />
            </div>
          </div>
        </div>

        <div className="display">
          {nav.about ? (
            <About />
          ) : nav.undergrad ? (
            <Undergrad />
          ) : nav.today ? (
            <Today />
          ) : nav.projects ? (
            <Projects />
          ) : nav.contact ? (
            <Contact />
          ) : nav.blog ? (
            <Blog />
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
