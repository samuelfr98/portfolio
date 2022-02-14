import "../ModernApp.css";
// import skillsChartDraft from "../Images/skillsChartDraft.jpeg";
import { useState, useEffect } from "react";
import HeadStandCard from "./HeadStandCard";
import SkillsCard from "./SkillsCard";
import ExperiencesCard from "./ExperiencesCard";
import NavLoader from "./NavLoader";

const About = () => {
  const [skills, setSkills] = useState(false);
  const [experiences, setExperiences] = useState(false);

  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  return (
    <div>
      {isLoading ? <NavLoader page='about' /> : ""}
      <div className="aboutContainer">
        <div className="aboutProfPic">
          <HeadStandCard />
        </div>
        <div className="aboutBio">
          <p>
            Sam Friedman grew up in Charlotte, NC.
            <br />
            <br />
            Whether he is developing an app, competing in a start-up
            competition, or ascending a challenging rock climbing route, he
            loves tackling problems.
          </p>
        </div>
        {skills ? (
          <div className="aboutSkills" onMouseLeave={() => setSkills(false)}>
            <SkillsCard />
          </div>
        ) : (
          <div className="hoverForSkills">
            <div></div>
            <div></div>{" "}
            <div className="hoverArea" onMouseEnter={() => setSkills(true)}>
              Hover for skills
            </div>
          </div>
        )}
        {experiences ? (
          <div
            className="aboutExperiences"
            onMouseLeave={() => setExperiences(false)}
          >
            <div>
              <ExperiencesCard experience="Leading" />
            </div>
            <div>
              <ExperiencesCard experience="Collaborating" />
            </div>
            <div>
              <ExperiencesCard experience="Exploring" />
            </div>
            <div>
              <ExperiencesCard experience="Learning" />
            </div>
            <div>
              <ExperiencesCard experience="Interning" />
            </div>
            <div>
              <ExperiencesCard experience="Overcoming" />
            </div>
          </div>
        ) : (
          <div className="hoverForExperiences">
            <div></div>
            <div></div>
            <div></div>
            <div
              className="hoverArea"
              onMouseEnter={() => setExperiences(true)}
            >
              Hover for experiences
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

{
  /* Java certified, AWS certified, Sonder exec board, won makeathon cash
          prize, rock climbing competitions College is full of opportunity.
          Opportunity to learn, to find, to grow, to experience. <br />
          In college, Sam held a leadership position with an environmental
          sustainability club and co-op, The Sonder Market [LINK or POP UP].{" "}
          <br />
          Sam competed in a start up competition called the Makeathon, where his
          team won a cash prize in the physical product category [LINK to Photo
          with check and skydiving!]. <br />
          Sam has been an avid rock climber for over a decade, and he worked at
          his local climbing gym in high school. He also competed nationally at
          that time. In undergrad, he continued this passion and climbing the
          Carolina Climbing Club. <br /> */
}
