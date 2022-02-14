import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";

const Projects = () => {
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
            <h1>Projects</h1>
        </div>
    )
}

export default Projects