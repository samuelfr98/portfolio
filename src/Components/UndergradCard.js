import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import onecard from "../Images/undergradOneCard.png";

const UndergradCard = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // Is front side showing? T/F
  const [side, setSide] = useState(true);
  const [spot, setSpot] = useState([0, 0]);

  const ref = useRef();

  useEffect(() => {
    // save ref before cleanup resets to null
    const instance = ref.current;

    const update = (e) => {
      const right = instance.getBoundingClientRect().right;
      const top = instance.getBoundingClientRect().top;

      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      console.log("x: " + e.x / width * 100, "y: " + e.y / height * 100);

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

    const height = ref.current.offsetHeight;
    const width = ref.current.offsetWidth;
    const spotOnCard = [(x / width) * 100, (y / height) * 100];
    // console.log(spot)
    setSpot(spotOnCard);
  };

  const info = () => {
    // return based on X,Y cursor coordinates.
    // ?,? --> Course history for major
    // ?,? --> Course history for minor
    // ?,? --> Sonder
    // ?,? --> Rock climbing
    // ?,? --> Graduation date
    // ?,? --> PID
    // Else, display: "Click on major, minor, or clubs on front of card for more info!"

    if (spot[0] > -15 && spot[0] < 20 && spot[1] > 7 && spot[1] < 15) {
      return (<div>
        <p>Name<br/>
        Sam</p>
      </div>);
    }
    if (spot[0] > -45 && spot[0] < 18 && spot[1] > 18 && spot[1] < 42.5) {
      return(
        <div>
          <p>Pic of UNC<br/>
          School age, known programs, location, MJ<br/>
          Comp sci department
          </p>
        </div>
      );
    }
    if (spot[0] > -46 && spot[0] < -22.5 && spot[1] > -33 && spot[1] < 14) {
      return(
        <div>
          <p>Pic<br/>
          When it was taken and where
          </p>
        </div>
      );
    }
    if (spot[0] > -11 && spot[0] < 18 && spot[1] > 0 && spot[1] < 4) {
      return(
        <div>
          <p>Major<br/>
          Favorite courses listed
          </p>
        </div>
      );
    }
    if (spot[0] > -11 && spot[0] < 43 && spot[1] > -8 && spot[1] < -3) {
      return(
        <div>
          <p>Minor<br/>
          Shuford program<br/>
          Favorite courses
          </p>
        </div>
      );
    }
    if (spot[0] > -46 && spot[0] < -7 && spot[1] > -39.8 && spot[1] < -35.5) {
      return (
        <div>
          <p>Sonder<br/>
          Volunteering, COVID pivot, exec board, prepared me for post grad life in covid
          </p>
        </div>
      );
    }
    if (spot[0] > -46 && spot[0] < -22 && spot[1] > -44 && spot[1] < -40.3) {
      return (
        <div>
          <p>Climbing<br/>
          Started after 9th bday party there<br/>
          Team, competing<br/>
          Coaching<br/>
          College<br/>
          </p>
        </div>
      );
    } else {
      return "GDTBATH";
    }
    return <div>Major, minor, etc.</div>;
  };

  return (
    <div className="undergradCardContainer">
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
        <div className="undergradFront">
          <img src={onecard} position="absolute" height="100%" width="100%" />

          {/* divs for card sections */}
          {/* if(spot[0] > -15 && spot[0] < 20 && spot[1] > 7 && spot[1] < 15) {
      return('Name')
    }
    if(spot[0] > -45 && spot[0] < 18 && spot[1] > 18 && spot[1] < 42.5) {
      return('UNC')
    }
    if(spot[0] > -46 && spot[0] < -22.5 && spot[1] > -33 && spot[1] < 14) {
      return('Pic')
    }
    if(spot[0] > -11 && spot[0] < 18 && spot[1] > 0 && spot[1] < 4) {
      return('Major')
    }
    if(spot[0] > -11 && spot[0] < 43 && spot[1] > -8 && spot[1] < -3) {
      return('Minor')
    }
    if(spot[0] > -46 && spot[0] < -7 && spot[1] > -39.8 && spot[1] < -35.5) {
      return('Sonder')
    }
    if(spot[0] > -46 && spot[0] < -22 && spot[1] > -44 && spot[1] < -40.3) {
      return('Climbing')
    } */}
          <div className="nameSpot" />
          <div className="uncSpot" />
          <div className="picSpot" />
          <div className="majorSpot" />
          <div className="minorSpot" />
          <div className="sonderSpot" />
          <div className="climbingSpot" />
          {/*  */}
        </div>
        <div className="undergradBack">{info()}</div>
      </div>
    </div>
  );
};

export default UndergradCard;
