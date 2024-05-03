const ProjectsRetro = (theme) => {
  return (
    <div className="aboutMe">
      <div className="projectsRetro">
        <h1>Projects</h1>
        <ul>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98?tab=repositories", "_blank")
            }
          >
            Sloper - Django Data Aggregation Service; Python Deep Learning Financial Analysis Service; Swift Backend Service; SwiftUI GUI
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://dev.dgghcs9eikgpg.amplifyapp.com", "_blank")
            }
          >
            Portfolio Site
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/ChatApp/tree/backend", "_blank")
            }
          >
            ChatApp
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/Melanoma-Convolutional-Neural-Network", "_blank")
            }
          >
            Melanoma Identifier
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/Venue-Finder-Web-App", "_blank")
            }
          >
            UNC Chapel Hill Restaurant Search Engine
          </li>
          <li
            className="retroProjLink"
            onClick={() =>
              window.open("https://github.com/samuelfr98/2048", "_blank")
            }
          >
            2048 Clone
          </li>

        </ul>
      </div>
    </div>
  );
};

export default ProjectsRetro;
