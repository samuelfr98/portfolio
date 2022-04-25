import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import postcard from "../Images/postCardFront.png";

const ContactCard = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // Is front side showing? T/F
  const [side, setSide] = useState(true);

  const ref = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.style.transform = `rotateY(${180}deg)`;
  //     setSide(false);
  //   }, 4000);
  // }, []);

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
    const xDegrees = (x / 120).toFixed(0);
    const yDegrees = (y / 70).toFixed(0);
    ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
  };

  const frontside = () => {
    return (
      <img src={postcard} position="absolute" height="100%" width="100%" />
    );
  };

  const backside = () => {
    return (
      <div className="contactBack">
        {/* <form className="contactForm" action="" method="" encType="">
          Name:
          <br />
          <input type="text" />
          <br />
          Email:
          <br />
          <input type="text" />
          <br />
          Message: <br />
          <textarea rows="6" cols="20"></textarea>
          <br />
          <input type="button" value={"submit"} />
        </form> */}
      </div>
    );
  };

  return (
    <div className="contactCardContainerAbout">
      <div
        className="contactCard"
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
                setSide(false);
              }
            : () => {
                return;
              }
          // () => {
          //     ref.current.style.transform = `rotateY(${0}deg)`;
          //     setTimeout(() => setSide(true), 750);
          //   }
        }
      >
        <div className="contactFront">{frontside()}</div>
        {backside()}
      </div>
    </div>
  );
};

export default ContactCard;
