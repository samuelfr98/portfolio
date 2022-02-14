import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";

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
            <h1>Today</h1>
        </div>
    )
}

export default Today