import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";
import TodayCard from "./TodayCard";
import la from "../Images/louisianaOutline.png";

const Today = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  return (
    <div>
      {isLoading ? <NavLoader page="about" /> : ""}
      <div className="today">
        <TodayCard />
        <div className="la">
          <img src={la} height="300%" object-fit="cover" overflow="hidden" position="absolute" />
        </div>
      </div>
    </div>
  );
};

export default Today;
