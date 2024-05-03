import { useState, useEffect, useRef } from "react";
import NavLoader from "./NavLoader";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  const ref = useRef();

  // Project List:
  //  Sloper
  //    LSTM Python
  //    API Data Layer Django
  //    UI Layer Swift
  //  Portfolio site
  //  Chat App
  //  Melanoma RNN
  //  Small projects from undergrad like reddit bots, 2048 clone, verilog mips interpretter, smtp client and server as an intro to sockets


  const projects = [
    {
      title: "Sloper",
      desc: "This began as a personal challenge to build a Stocks analysis and data visualization app for absolutely no cost, and it culminated in multiple independently and collectively novel services.",
      tools: [
        "Python Django Data Aggregation and Enrichment Layer",
        "- - - - - - - - - - - -",
        "Python Deep Learning Layer",
        "- - - - - - - - - - - -",
        "Swift Backend Layer",
        "- - - - - - - - - - - -",
        "SwiftUI iOS/GUI Layer"
      ],
      link: "https://github.com/samuelfr98?tab=repositories",
    },
    {
      title: "Portfolio Site",
      desc: "This website served as an exercise in learning more about ReactJS, CSS, and creative web designs.",
      tools: [],
      link: "https://dev.dgghcs9eikgpg.amplifyapp.com",
    },
    {
      title: "Chat App",
      desc: "A messenger application leveraging AWS and a serverless design.",
      tools: [],
      link: "https://github.com/samuelfr98/ChatApp/tree/backend",
    },
    {
      title: "Melanoma Identifier",
      desc: "A convolutional neural network to determine if images of skin legions are cancerous or benign. The final project for COMP 560 - Machine Learning.",
      tools: [],
      link: "https://github.com/samuelfr98/Melanoma-Convolutional-Neural-Network",
    },
    {
      title: "UNC Chapel Hill Restaurant Search Engine",
      desc: "A search engine to find local restaurants and bars around campus at UNC Chapel Hill. A project in COMP 426 - Advanced Web Design.",
      tools: [],
      link: "https://github.com/samuelfr98/Venue-Finder-Web-App",
    },
    {
      title: "2048 Clone",
      desc: "An undergraduate introduction to ReactJS.",
      tools: [],
      link: "https://github.com/samuelfr98/2048",
    },
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
    } else {
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
