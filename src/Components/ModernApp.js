import "../ModernApp.css";
import personalLogo from "../Images/personalLogo.jpeg";
import bluePaper from "../Images/bluePaper.jpeg";
import React, { useEffect, useRef, useState } from "react";
import FiberScene from "./FiberScene";
import Logo from "./Logo";
import Card from "./Card";
import ModernAppLoader from "./ModernAppLoader";
import { ReactComponent as ScrollingSVG } from "../Images/ScrollingSVG.svg";

const ModernApp = ({ downgradeTheme }) => {
  const [isLoading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4450);
  }, []);

  const handleScroll = (e) => {
    // Fidn scroll position relative to top
    setScrollY(e.target.scrollTop);
    // Find SVG path and total length
    const path = document.getElementById("path");
    const length = path.getTotalLength();
    // The starting position ofr the drawing
    path.style.strokeDasharray = length;
    // Hide the SVG by offsetting dash. Remove this line to show SCG before scroll draw
    path.style.strokeDashoffset = length;

    const scrollPercent = scrollY / (document.body.offsetHeight * 8);

    const draw = length * scrollPercent;

    path.style.strokeDashoffset = length - draw;
    console.log(scrollY)
  };

  return (
    <div
      className="modernContainer"
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      {isLoading ? <ModernAppLoader /> : ""}
      <div className="scrollSvg" ref={ref}>
        <ScrollingSVG />
      </div>
      <div className="section">
        <div>About Me</div>
        <Card />
      </div>
      <div className="section">
        <div>Thinking of an upgrade? Take it up a notch.</div>
        <div>Card about website redesign</div>
      </div>
      <div className="section">
        <div>Card about me</div>
        <div>About Me</div>
      </div>
      <div className="section">
        <div>Projects</div>
        <div>Cards about projects</div>
      </div>
      <div className="section">
        <div>Card about life today</div>
        <div>Life Today</div>
      </div>
      <div className="section">
        <div>Contact Me</div>
        <div>Ways to contact me</div>
      </div>
      <div className="outerLogo">
        <div className="logoContainer">
          <div></div>
          <Logo />
        </div>
        <button onClick={() => downgradeTheme("retro")}>Downgrade</button>
      </div>
    </div>
  );
};

export default ModernApp;
