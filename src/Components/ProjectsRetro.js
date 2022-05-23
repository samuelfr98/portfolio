const ProjectsRetro = (theme) => {
  return (
    <div className="aboutMe">
      <div className="projectsRetro">
        <h1>Projects</h1>
        <ul>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/portfolio", "_blank")
            }
          >
            Portfolio Website
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/2048", "_blank")
            }
          >
            2048 Clone
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/Melanoma-Convolutional-Neural-Network", "_blank")
            }
          >
            Convolutional Neural Network to Identify Malignant Tissue
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("", "_blank")
            }
          >
            System Verilog MIPS CPU Emulator
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("", "_blank")
            }
          >
            Reddit Bot
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("", "_blank")
            }
          >
            SMTP Client and Server
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("", "_blank")
            }
          >
            Makeathon
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsRetro;
