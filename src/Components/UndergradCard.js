import "../ModernApp.css";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import onecard from "../Images/undergradOneCard.png";
import uncCampus from "../Images/uncCampus.png";

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
        <p>
        Sam grew up in North Carolina and graduated from UNC Chapel Hill with a Computer Science BS
        and minor in the Shuford Entrepreneurship Program.<br/><br/>
        Both comp sci and entrepreneurship heavily involve desgin thinking principles, and this combination<br/> of studies prepared Sam for the worlds of agile development and LEAN startup philosophies as well.</p>
      </div>);
    }
    if (spot[0] > -45 && spot[0] < 18 && spot[1] > 18 && spot[1] < 42.5) {
      return(
        <div>
          <img src={uncCampus}/>
          <p>
          UNC Chapel Hill is the oldest public university in the United States <br/> 
          and has been a leader in the worlds of research and education since 1789. <br/>
          <br/>
          UNC's computer science program provided a vast spectrum of experience: from theories of computational language design to web development to designing a computer on an arduino motherboard. 
          </p>
        </div>
      );
    }
    if (spot[0] > -46 && spot[0] < -22.5 && spot[1] > -33 && spot[1] < 14) {
      return(
        <div>
          <p>
          This picture was taken after graduation in May 2021 at He's Not Here, a famous Franklin St landmark. 
          </p>
        </div>
      );
    }
    if (spot[0] > -11 && spot[0] < 18 && spot[1] > 0 && spot[1] < 4) {
      return(
        <div>
          <p>Favorite Computer Science Courses<br/>
          Favorite courses listed:<br/>
          COMP 110 Intro to Programming <br/>
          COMP 283 Discrete Math <br/>
          MATH 381 Linear Algebra<br/>
          COMP 401 Object Oriented Programming<br/>
          COMP 410 Data Structures <br/>
          COMP 411 Computer Design<br/>
          COMP 426 Advanced Web Development<br/>
          COMP 431 Networking <br/>
          COMP 455 Prinples of Computational Language Design<br/>
          COMP 541 Computer Logic and Design<br/>
          COMP 550 Algorithms<br/>
          COMP 555 Bioalgorithms<br/>
          COMP 560 Machine Learning<br/>
          </p>
        </div>
      );
    }
    if (spot[0] > -11 && spot[0] < 43 && spot[1] > -8 && spot[1] < -3) {
      return(
        <div>
          <p>Minor<br/>
          Shuford program<br/>
          ECON 87H Entrepreneurship Design Thinking Freshman Seminar<br/>
          ECON 101 Introduction to Economics<br/>
          ECON 327 Scientific Ventures<br/>
          ECON 325 Theories and Practices of Entrepreneurship<br/>
          ECON 393 Practicum in Entrepreneurship<br/><br/>
          Won $500 cash prize at the 2019 UNC Makeathon Start Up Competition.
          </p>
        </div>
      );
    }
    if (spot[0] > -46 && spot[0] < -7 && spot[1] > -39.8 && spot[1] < -35.5) {
      return (
        <div>
          <p>Sonder<br/>
          Volunteering, COVID pivot, exec board, prepared me for post grad life in covid
          
          Sam began volunteering with The Sonder Market in 2018 and was an executive officer his last year at UNC. <br/>
          The club was incorporated as a nonprofit in 2020 during the onset of COVID 19, and the epidemic triggered a series of pivots in strategy. <br/>
          Struggling through COVID and adapting provided challenging, extremely valuable experiences in terms of leadership and grit.<br/>
          The four exectuive team members met several times a week in the first semester of 2021 in an effort to interview industry experts, strategize, research and <br/>
          plan for the legacy seniors were leaving behind. The team focused on documenting club practices, recruiting during COVID, and generating club cash flow.
          </p>
        </div>
      );
    }
    if (spot[0] > -46 && spot[0] < -22 && spot[1] > -44 && spot[1] < -40.3) {
      return (
        <div>
          <p>Climbing<br/>
          Sam was first exposed to rock climbing at a friend's 9th bday party.<br/>
          He went on to join a youth rock climbing team, progress to competing nationally, coach younger climbers and join the UNC club as a freshman.<br/>
          Rock climbing is Sam's favorite activity when the computer is powered off.<br/>
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
