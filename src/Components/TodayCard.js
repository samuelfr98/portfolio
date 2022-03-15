import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import ibmCard from "../Images/ibmCard.png";

const TodayCard = () => {
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
    return <div>Certifications, IBM, new tech, moving to LA</div>
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
            <img src={ibmCard} 
            position="absolute"
            height="100%"
            width="100%"
            />
        </div>
        <div className="undergradBack">{info()}</div>
      </div>
    </div>
  );
};

export default TodayCard;
