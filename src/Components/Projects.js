import { useState, useEffect, useRef } from "react";
import NavLoader from "./NavLoader";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  const ref = useRef();

  const projects = [
    {
      title: "Portfolio Website",
      desc: "As an exercise in web design and CSS, I decided to develop a personal website.",
      tools: ["React", "HTML", "CSS", "Responsive Web Design", "AWS", "Graphql", "GitHub"],
      link: "https://github.com/samuelfr98/portfolio",
    },
    {
      title: "2048 Clone",
      desc: "First exposure to responsive web design in COMP 426 (Advanced Web Development)",
      tools: ["React", "HTML", "CSS", "GitHub"],
      link: "https://github.com/samuelfr98/2048",
    },
    {
      title: "Convolutional Neural Network to Identify Malignant Tissue",
      desc: "Implemented a convolutional neural network in PyTorch, a hand written logistic regression model and then Scikit-learn's built in LogisticRegression model. Finally, outcomes of all three methods were compared.",
      tools: [
        "Python",
        "PyTorch",
        "Scikit-learn",
        "Machine learning models",
        "Google Colab",
        "Jupyter",
      ],
      link: "https://github.com/samuelfr98/Melanoma-Convolutional-Neural-Network",
    },
    {
      title: "System Verilog MIPS CPU Emulator",
      desc: "Designed simple circuits up to a fully programmable, single cycle MIPS CPU on an Arduino Nexus. Demonstrated functionality by programming a game in MIPS and playing on the device.",
      tools: [
        "SystemVerilog",
        "VirtualBox",
        "Arduino",
        "MIPS",
        "Computer Design",
        "Computer Architecture",
        "Digital Logic",
      ],
      link: "",
    },
    {
      title: "Reddit Bot",
      desc: "Built a reddit bot to correct misspellings of the artist MF DOOM's name.",
      tools: ["Python3", "Reddit API"],
      link: "",
    },
    {
      title: "SMTP Client and Server",
      desc: "For Comp 435 (Networking), built a client and server to send emails. From parsing the client's input to routing messages via web sockets on the server side to allowing all functionality of a typical email UI, the programmed allowed users to send and receive emails.",
      tools: ["Python", "Sockets", "VIM", "Network Protocols"],
      link: "",
    },
    {
      title: "Makeathon",
      desc: "Won cash investment prize in 2019 UNC Start Up competition, the Makeathon. In one week, our team of five identified a problem, interviewed experts while brainstorming solution, built a minimally viable product and pitched to investors on competition day - all while simultaneously full time students. ",
      tools: ["Teamwork", "LEAN", "Pitching", "Design Thinking Process"],
      link: "",
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
      out = [1, 0, 0, 0, 0, 0, 0];
    } else if (scrollPosition < 1.8) {
      out = [0, 1, 0, 0, 0, 0, 0];
    } else if (scrollPosition < 2.8) {
      out = [0, 0, 1, 0, 0, 0, 0];
    } else if (scrollPosition < 3.8) {
      out = [0, 0, 0, 1, 0, 0, 0];
    } else if (scrollPosition < 4.8) {
      out = [0, 0, 0, 0, 1, 0, 0];
    } else if (scrollPosition < 5.8) {
      out = [0, 0, 0, 0, 0, 1, 0];
    } else {
      out = [0, 0, 0, 0, 0, 0, 1];

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
