import "../ModernApp.css";
import React, { useState, useEffect, useRef } from "react";


const EmployeeCard = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
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
    const xDegrees = (x / 10).toFixed(0);
    const yDegrees = (y / 20).toFixed(0);
    ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
  };

  return (
    <div className="cardContainer">
      <div></div>
      <div
        className="card"
        ref={ref}
        onMouseMove={() => onLogo()}
        onMouseLeave={() => {
          ref.current.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
        }}
      >
        <div>
          {/* <h1>Sam Friedman</h1> */}
          <img
              src={headstand}
              height="240vh"
              object-fit="cover"
              overflow="hidden"
            />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
