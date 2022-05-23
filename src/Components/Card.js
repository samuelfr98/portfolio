import "../ModernApp.css";
import React, { useState, useEffect, useRef } from "react";
import samProfileImageBordered from "../Images/samProfileImageBordered.jpg";
import {
  isChrome,
  browserName,
  isSafari,
  MobileView,
  BrowserView
} from "react-device-detect";

const Card = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const ref = useRef();

  // // Opera 8.0+
  // const isOpera =
  //   (!!window.opr && !!opr.addons) ||
  //   !!window.opera ||
  //   navigator.userAgent.indexOf(" OPR/") >= 0;

  // // Firefox 1.0+
  // const isFirefox = typeof InstallTrigger !== "undefined";

  // // Safari 3.0+ "[object HTMLElementConstructor]"
  // const isSafari =
  //   /constructor/i.test(window.HTMLElement) ||
  //   (function (p) {
  //     return p.toString() === "[object SafariRemoteNotification]";
  //   })(
  //     !window["safari"] ||
  //       (typeof safari !== "undefined" && safari.pushNotification)
  //   );

  // // Internet Explorer 6-11
  // const isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // // Edge 20+
  // const isEdge = !isIE && !!window.StyleMedia;

  // // Chrome 1 - 71
  // const isChrome =
  //   !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // // Blink engine detection
  // const isBlink = (isChrome || isOpera) && !!window.CSS;

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
    const xDegrees = (x / 20).toFixed(0);
    const yDegrees = (y / 40).toFixed(0);
    ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    if (isSafari) {
      ref.current.style.webkitTransform = `rotateX(${
        yDegrees / 18
      }deg) rotateY(${xDegrees / 18}deg)`;
    }
    // Chrome
    ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
    if (isChrome)
      ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;

  };

  return (
    <div className="cardContainerProf">
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
            src={samProfileImageBordered}
            // height="500vh"
            width="auto"
            max-width="100%"
            object-fit="cover"
            overflow="hidden"
            resize="both"
            className="samProfileImage"
            // position="absolute"
            // bottom="0"
            // right="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
