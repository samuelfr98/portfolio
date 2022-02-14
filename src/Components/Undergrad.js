import NavLoader from "./NavLoader";
import { useState, useEffect } from "react";


const Undergrad = () => {
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
      <h1>Undergrad</h1>
    </div>
  );
};

export default Undergrad;
