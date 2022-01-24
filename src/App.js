import logo from "./logo.svg";
import "./App.css";
import TitleBar from "./Components/TitleBar";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Resume from "./Components/Resume";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    aboutme: false,
    resume: false,
    contactme: false,
    github: false,
    linkedin: false,
  });

  const redirect = (url) => {
    if (url === "About Me")
      setState({
        aboutme: true,
        resume: false,
        contactme: false,
        github: false,
        linkedin: false,
      });
    else if (url === "Resume")
      setState({
        aboutme: false,
        resume: true,
        contactme: false,
        github: false,
        linkedin: false,
      });
    else if (url === "Contact Me")
      setState({
        aboutme: false,
        resume: false,
        contactme: true,
        github: false,
        linkedin: false,
      });
    else if (url === "https://github.com/samuelfr98") {
      setState({
        aboutme: false,
        resume: false,
        contactme: false,
        github: true,
        linkedin: false,
      });
      window.open(url, "_blank").focus();
    } else if (url === "https://www.linkedin.com/in/sam-friedman-b8852118a") {
      setState({
        aboutme: false,
        resume: false,
        contactme: false,
        github: false,
        linkedin: true,
      });
      window.open(url, "_blank").focus();
    }
    console.log(state);
  };

  const showPage = (state) => {
    if (state.aboutme) return <AboutMe />;
    else if (state.resume) return <Resume />;
    else if (state.contactme) return <ContactMe />;
  };

  return (
    <div className="App">
      <div>
        <TitleBar />
        <div className="fileBar">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Image</button>
          <button>Options</button>
          <button>Help</button>
        </div>
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
            <button onClick={() => redirect("https://www.linkedin.com/in/sam-friedman-b8852118a")}>
              LinkedIn
            </button>
          </div>
          <div className="sideButton">
            <button onClick={() => redirect("Contact Me")}>Contact Me</button>
          </div>
        </div>
        <div className="paintBoard">
          <div className="whiteArea">
            {showPage(state)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
