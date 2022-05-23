import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import ibmCard from "../Images/ibmCard.png";

const TodayCard = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // Is front side showing? T/F
  const [side, setSide] = useState(true);

  const ref = useRef();

  useEffect(() => {
    // save ref before cleanup resets to null
    const instance = ref.current;

    const update = (e) => {
      const right = instance.getBoundingClientRect().right;
      const top = instance.getBoundingClientRect().top;

      setX(e.x - right + instance.offsetWidth / 2);
      setY(-1 * (e.y - top - instance.offsetHeight / 2));
    };

    instance.addEventListener("mousemove", update);
    instance.addEventListener("touchmove", update);

    return () => {
      instance.removeEventListener("mousemove", update);
      instance.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.transform = `rotateY(${180}deg)`;
      setSide(false)}, 4000)
  }, [])


  const onLogo = () => {
    const xDegrees = (x / 40).toFixed(0);
    const yDegrees = (y / 60).toFixed(0);
    ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
  };

  const info = () => {
    // return major, minor, etc.


    if (props.section == "graduation") {
      return (
        <div className="todayContent">
          graduation
          <br />
          <br/>
          <br />
          After graduating with distinction from UNC, I moved to Baton Rouge,
          LA. <br /><br/>
          Despite some distance to the mountains now, rock climbing continues to play a central role in my life, and I am a
          member at the local climbing gym, Uptown Climbing. <br /><br/>
          I enjoy pursuing personal projects to keep up to date with new
          releases and tools. <br />
        </div>
      );
    } else if (props.section == "certifications") {
      return (
        <div className="todayContent">
          Certifications
          <br />
          <br/>
          <br />
          In parallel to project work, I passed the AWS Certified Cloud
          Practitioner exam and earned my Oracle Java SE 8 certification.
          <br />
        </div>
      );
    } else if (props.section == "designThinking") {
      return (
        <div className="todayContent">
          Design Thinking <br />
          <br />
          <br />
          I have participated in agile and LEAN workplaces through my internship
          experience and time with IBM.
          <br />
          <br />
          I am not only passionate about implementing solutions; whereas, I
          enjoy empathizing with users, uncovering painpoints, ideating and then
          actualizing a solution. <br />
        </div>
      );
    } else if (props.section == "skills") {
      return (
        <div className="todayContent">
          skills
          <br />
          <br />
          <br />
          PL-SQL <br /><br />
          Informatica <br /><br />
          Python3 <br /><br />
          Big data manipulation
          <br /><br />
          Collaborating with and leading an international team <br /><br />
          Balancing time as lead developer on one project and data scientist on
          another
          <br />
        </div>
      );
    } else return <div className="todayContent">Click on a topic from the right hand side to display more info here!</div>;
  };

  return (
    <div className="todayCardContainer">
      <div
        className="todayCard"
        ref={ref}
        onMouseMove={
          side
            ? async () => onLogo()
            : () => {
                return;
              }
        }
        onMouseLeave={
          side
            ? () => {
                ref.current.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
              }
            : () => {
                return;
              }
        }
        onClick={
          side
            ? () => {
                ref.current.style.transform = `rotateY(${180}deg)`;
                // ref.current.style.transform = `z-index: 1000`;
                setSide(false);
              }
            : () => {
                ref.current.style.transform = `rotateY(${0}deg)`;
                // ref.current.style.transform = `z-index: 0`;
                setTimeout(() => setSide(true), 750);
              }
        }
      >
        <div className="undergradFront">
          <img src={ibmCard} position="absolute" height="100%" width="100%" />
        </div>
        <div className="undergradBack">{<div>{info()}</div>}</div>
      </div>
    </div>
  );
};

export default TodayCard;
