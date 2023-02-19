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
          {picSlide ? (
            <>
              <div className="profPic">
                <Card />
              </div>
              <div className="homeBio">
                <BioCard />
              </div>
            </>
          ) : (
            <>
              <div className="profPicStatic">
                <Card />
              </div>
              <div className="homeBioStatic">
                <BioCard />
              </div>
            </>
          )}
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
      <div className="modernContainer">


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
