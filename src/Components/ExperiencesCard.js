import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const ExperiencesCard = ({ experience }) => {
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

  const onLogo = () => {
    const xDegrees = (x / 24).toFixed(0);
    const yDegrees = (y / 8).toFixed(0);
    ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
  };

  const summary = () => {
    if (experience == "Leading") {
      return (
        // 'Sonder through COVID, rock climbing coach'
        <p>
          In highschool, Sam was a leader on his competitive rock climbing team,
          and coached younger climbers on Wednesday nights his senior year.{" "}
          <br />
          <br />
          At UNC, Sam was on the executive board for The Sonder Market, a UNC
          club dedicated to sustainably combatting food inaccessibility. <br />
          <br /> At work today, Sam tutors coworkers on Java design principles.
        </p>
      );
    }
    if (experience == "Collaborating") {
      return "Internships, working virtually, Makeathon";
    }
    if (experience == "Exploring") {
      return "Rock climbing, sky diving, moving to LA, trying new technologies";
    }
    if (experience == "Learning") {
      return "Certifications, side projects, passion";
    }
    if (experience == "Interning") {
      return "Start ups, LEAN methodology, design thinking, inspiration";
    }
    if (experience == "Overcoming") {
      return "Sciatica, COVID, anxiety, growth";
    }
  };

  return (
    <div className="expCardContainer">
      <div
        className="expCard"
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
            ? async () => {
                ref.current.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
              }
            : () => {
                return;
              }
        }
        onClick={
          side
            ? async () => {
                ref.current.style.transform = `rotateY(${180}deg)`;
                setSide(false);
              }
            : async () => {
                ref.current.style.transform = `rotateY(${0}deg)`;
                setTimeout(() => setSide(true), 750);
              }
        }
      >
        <div className="front">{experience}</div>
        <div className="back">{summary()}</div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
