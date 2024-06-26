import NavLoader from "./NavLoader";
import { useState, useEffect } from "react";
import UndergradCard from "./UndergradCard";

const Undergrad = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  });

  return (
    <div>
      {isLoading ? <NavLoader page="about" /> : ""}
      <div className="undergrad">
        <UndergradCard />
      </div>
    </div>
  );
};

export default Undergrad;
