import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import HeadStandCard from "./HeadStandCard";
import prof from "../Images/samProfileImage.png";

import onecard from "../Images/undergradOneCard.png";

const AboutCard = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // Is front side showing? T/F
  const [side, setSide] = useState(true);
  const [page, setPage] = useState(0);

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
    const xDegrees = (x / 100).toFixed(0);
    const yDegrees = (y / 70).toFixed(0);
    ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
  };

  const info = () => {
    // return major, minor, etc.
    return page == 0 ? <div>Major, minor, etc.</div> : "";
    // return
  };

  const frontside = () => {
    if (page == 0) { return (
      <div className="undergradFront">
        <div className="aboutContainer">
          <div></div>
          <div></div>
          <div className="aboutPic">
            <img src={prof} position="absolute" height="100%" width="200%" />
          </div>
          <div className="aboutBio">
            <p>
              My name is Sam Friedman, and I grew up in North Carolina. <br />{" "}
              I'm passionate about problem solving: from coding <br /> to rock
              climbing routes to even competing in a start up competition.
            </p>
          </div>
        </div>
      </div>
    )
    }
    else if (page == 1) { return (
      <div className="undergradFront">
        <div className="aboutContainer">
          <div></div>
          <div></div>
          <div className="aboutPic">
            <img src={prof} position="absolute" height="100%" width="200%" />
          </div>
          <div className="aboutBio">
            <p>
             Page 1
             </p>
          </div>
        </div>
      </div>
    )
    } else if (page == 2) { return (
      <div className="undergradFront">
        <div className="aboutContainer">
          <div></div>
          <div></div>
          <div className="aboutPic">
            <img src={prof} position="absolute" height="100%" width="200%" />
          </div>
          <div className="aboutBio">
            <p>
              2
            </p>
          </div>
        </div>
      </div>
    )
    } else if (page == 3) { return (
      <div className="undergradFront">
        <div className="aboutContainer">
          <div></div>
          <div></div>
          <div className="aboutPic">
            <img src={prof} position="absolute" height="100%" width="200%" />
          </div>
          <div className="aboutBio">
            <p>
              3
            </p>
          </div>
        </div>
      </div>
    )
    } else if (page == 4) { return (
      <div className="undergradFront">
        <div className="aboutContainer">
          <div></div>
          <div></div>
          <div className="aboutPic">
            <img src={prof} position="absolute" height="100%" width="200%" />
          </div>
          <div className="aboutBio">
            <p>
              4 bihhhh
            </p>
          </div>
        </div>
      </div>
    )
    }
  };

  const scroll = () => {
    console.log(page)
    return page < 4 ? setPage(page + 1) : setPage(0);
  };

  return (
    <div className="undergradCardContainerAbout">
      <div
        className="undergradCard"
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
        {frontside()}
      <div className="undergradBack">{info()}</div>

      </div>
      <div className="pageCounter">
          {page}
      </div>
      <div className="scrollButton" onClick={() => scroll()}>Scroll</div>

    </div>
  );
};

export default AboutCard;
