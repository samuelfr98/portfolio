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
            <h1>Favorite Projects as cards</h1>
            <ul>
              <li>Convolutional Neural Network to categorize malignant and benign skin lesions</li>
              <li>2048: Sam's first exposure to React and MVC</li>
              <li>Franklin St Venue Finder: Sam's first experience with APIs, deployment and single page applications</li>
              <li>System Verilog, MIPS, Nexys DDR 4 to simulate a computer</li>
              <li>UNC Makeathon and Hempsulation</li>
              <li>Reddit Bot to comment on lowercase MF DOOM spellings - the predecessor of many personal projects for the fun of the experience</li>
              <li>Pair of SMTP client and server programs to send, receive and serve emails. Networking, Socket and Python experience</li>
              <li>React Native Contacts App</li>
            </ul>
        </div>
    )
}

export default Projects