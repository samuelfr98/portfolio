import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";
import TodayCard from "./TodayCard";
import la from "../Images/louisianaOutline.png";
import FillOnHover from "./FillOnHover.js";

const Today = () => {
  // 2 Main Defects:
    //1 --> Flipped state lags one behind current state
    //2 --> Can click slightly to the left of buttons and state changes due to size of outer div 



  // For load in effect
  const [isLoading, setLoading] = useState(true);
  const [flipped, setFlipped] = useState([false, false, false, false]);
  const [anyFlipped, setAnyFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  const handleFlip = (index) => {
    // flipped lags behind anyFlipped boolean state
    
    const now = flipped
    console.log(flipped)
    const val = anyFlipped;
    console.log(val)

    if (anyFlipped == false) {
      setFlipped([false, false, false, false]);

    } else if (index == "graduation") {
      setFlipped([val, !val, !val, !val ]);
    } else if (index == "certifications") {
      setFlipped([!val, val, !val, !val ]);
    } else if (index == "designThinking") {
      setFlipped([!val, !val, val, !val ]);
    } else if (index == "skills") {
      setFlipped([!val, !val, !val, val ]);
    }

    console.log(flipped);

    setAnyFlipped(!val);
    console.log(anyFlipped)

  };

  return (
    <div>
      {isLoading ? <NavLoader page="about" /> : ""}
      <div className="today">
        <div></div>
        <TodayCard />
        <div className="fillOnHoverContainer">
          <div onClick={() => handleFlip("graduation")}>
            <FillOnHover props="graduation" />
          </div>
          <div onClick={() => handleFlip("certifications")}>
            <FillOnHover props="certifications" />
          </div>
          <div onClick={() => handleFlip("designThinking")}>
            <FillOnHover props="designThinking" />
          </div>
          <div onClick={() => handleFlip("skills")}>
            <FillOnHover props="skills" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
