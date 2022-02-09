import "../ModernApp.css";
import skillsChartDraft from "../Images/skillsChartDraft.jpeg"
import { useState } from "react";
import HeadStandCard from "./HeadStandCard";
import SkillsCard from "./SkillsCard";

const About = () => {
  const [skills, setSkills] = useState(false);
  const [experiences, setExperiences] = useState(false);

  return (
    <div className="aboutContainer">
      <div className="aboutProfPic">
        <HeadStandCard />
      </div>
      <div className="aboutBio">
        <p>
          Sam Friedman grew up in Charlotte, NC.
          <br />
          <br />
          Whether he is developing an app, competing in a start-up competition,
          or ascending a challengning rock climbing route, he loves tackling
          problems.
        </p>
      </div>
      {skills ? (
        <div className="aboutSkills" onMouseLeave={() => setSkills(false)}>
          {/* <img src={skillsChartDraft} height="360vh" overflow="hidden" object-fit="none" /> */}
          <SkillsCard />
        </div>
      ) : (
        <div className="hoverForSkills">
          <div></div>
          <div></div>{" "}
          <div className="hoverArea" onMouseEnter={() => setSkills(true)}>Hover for skills</div>
        </div>
      )}
      {experiences ? (
        <div
          className="aboutExperiences"
          onMouseLeave={() => setExperiences(false)}
        >
          Java certified, AWS certified, Sonder exec board, won makeathon cash
          prize, rock climbing competitions
        </div>
      ) : (
        <div className="hoverForExperiences">
          <div></div>
          <div></div>
          <div></div>
          <div className="hoverArea" onMouseEnter={() => setExperiences(true)}>
            Hover for experiences
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
