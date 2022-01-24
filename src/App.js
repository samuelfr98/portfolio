import logo from "./logo.svg";
import "./App.css";
import TitleBar from "./Components/TitleBar";
import AboutMe from "./Components/AboutMe";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    aboutme: false,
    resume: false,
    contactme: false
  });
  useEffect(() => {
    
  });

  const redirect = (url) => {
    if (url === "About Me") setState({aboutme: true, resume: false, contactme: false});
    else if (url === "Resume") setState({aboutme: false, resume: true, contactme: false});
    else if (url === "Contact Me") setState({aboutme: false, resume: false, contactme: true});
    else if (url != "") window.open(url, "_blank").focus();
  };

  return (
    <div className="App">
      <div>
        <TitleBar />
      </div>
      <div className="sideAndBoard">
        <div className="sideBar">
          <div className="sideButton">
            <button onClick={() => redirect("About Me")}>About Me</button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("Resume")}>Resume</button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("https://github.com/samuelfr98")}>
              GitHub
            </button>
          </div>
          <div className="sideButton">
            <button
              onClick={() =>
                redirect("https://www.linkedin.com/in/sam-friedman-b8852118a")
              }
            >
              LinkedIn
            </button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("Contact Me")}>Contact Me</button>
          </div>
        </div>
        <div className="paintBoard">
          <div className="whiteArea">
              {<AboutMe /> && state.aboutme}
              Hi
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
