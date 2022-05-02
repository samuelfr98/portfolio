import { useState, useEffect, useRef } from "react";
import NavLoader from "./NavLoader";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  const ref = useRef();

  const projects = [
    {
      title: "2048 Clone",
      desc: "First exposure to responsive web design in COMP 426 (Advanced Web Development)",
      tools: ["React", "HTML", "CSS"],
      link: "link",
    },
    {
      title:
        "Convolutional Neural Network for Classifying Malignant vs. Non-malignant Skin Lesions",
      desc: "desc",
      tools: ["tools"],
      link: "link",
    },
    {
      title: "System Verilog MIPS CPU Emulator",
      desc: "desc",
      tools: ["tools"],
      link: "link",
    },
    { title: "Reddit Bot", desc: "desc", tools: ["tools"], link: "link" },
    {
      title: "SMTP Client and Server",
      desc: "desc",
      tools: ["tools"],
      link: "link",
    },
    { title: "Makeathon", desc: "desc", tools: ["tools"], link: "link" },
  ];

  let counter = 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  const renderProjects = (p) => {
    return p.map((p) => (
      <div className="project" key={(counter += 1)} id={"project" + counter}>
        <ProjectCard
          title={p["title"]}
          desc={p["desc"]}
          tools={p["tools"]}
          link={p["link"]}
        />
      </div>
    ));
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position =
      document.getElementById("id").scrollTop /
      document.getElementById("id").offsetHeight;

    setScrollPosition(position);
    renderScroller();
  };

  const renderScroller = () => {
    let out = [];

    if (scrollPosition < 0.8) {
      out = [1, 0, 0, 0, 0, 0];
    } else if (scrollPosition < 1.8) {
      out = [0, 1, 0, 0, 0, 0];
    } else if (scrollPosition < 2.8) {
      out = [0, 0, 1, 0, 0, 0];
    } else if (scrollPosition < 3.8) {
      out = [0, 0, 0, 1, 0, 0];
    } else if (scrollPosition < 4.8) {
      out = [0, 0, 0, 0, 1, 0];
    } else if (scrollPosition < 5.8) {
      out = [0, 0, 0, 0, 0, 1];
    }

    return out.map((p, i) => (
      <div
        className={"scrolling" + p}
        id={i}
        onClick={() => {
          setScrollPosition(i);
          document.getElementById("id").scrollTop =
            document.getElementById("id").offsetHeight * i;
        }}
      ></div>
    ));
  };

  return (
    <div>
      {isLoading ? <NavLoader page="about" /> : ""}

      <div className="projectOuter">
        <div
          className="projectContainer"
          onScroll={() => handleScroll()}
          id="id"
        >
          {/* <h1>Favorite Projects as cards</h1>
    <ul>
      <li>
        Convolutional Neural Network to categorize malignant and benign skin
        lesions
      </li>
      <li>2048: Sam's first exposure to React and MVC</li>
      <li>
        Franklin St Venue Finder: Sam's first experience with APIs, deployment
        and single page applications
      </li>
      <li>System Verilog, MIPS, Nexys DDR 4 to simulate a computer</li>
      <li>UNC Makeathon and Hempsulation</li>
      <li>
        Reddit Bot to comment on lowercase MF DOOM spellings - the predecessor
        of many personal projects for the fun of the experience
      </li>
      <li>
        Pair of SMTP client and server programs to send, receive and serve
        emails. Networking, Socket and Python experience
      </li>
      <li>React Native Contacts App</li>
    </ul> */}
          <div>{renderProjects(projects)}</div>
        </div>
        <div className="scroller">{renderScroller()}</div>
      </div>
    </div>
  );
};

export default Projects;
