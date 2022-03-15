import "../ModernApp.css";
// import skillsChartDraft from "../Images/skillsChartDraft.jpeg";
import { useState, useEffect } from "react";
import HeadStandCard from "./HeadStandCard";
import SkillsCard from "./SkillsCard";
import ExperiencesCard from "./ExperiencesCard";
import NavLoader from "./NavLoader";
import RightLoader from "./RightLoader";
import LeftLoader from "./LeftLoader";

const About = () => {
  const [skills, setSkills] = useState(false);
  const [experiences, setExperiences] = useState(false);
  const [mainAbout, setMainAbout] = useState(true);

  // For load in effect
  const [isLoading, setLoading] = useState(true);
  const [sideLoading, setSideLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  // When switching horizontal pages, for conditional rendering load container
  const sideLoader = () => {
    setSideLoading(true);
    setTimeout(() => {
      setSideLoading(false);
    }, 1090);
  };

  return (
    <div className="container">
      {isLoading ? <NavLoader page="about" /> : ""}
      {skills ? (
        <>
          {/* <LeftLoader /> */}
          <div className="aboutSkills">
            <SkillsCard />
            <div
              className="returnToAboutRight"
              onClick={() => {
                setSkills(false);
                setMainAbout(true);
              }}
            >
              Main About &#8680;
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {experiences ? (
        <>
          {/* <RightLoader /> */}
          <div className="experiencesContainer">
            <div className="aboutExperiences">
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
            <div
              className="returnToAboutLeft"
              onClick={() => {
                setExperiences(false);
                setMainAbout(true);
              }}
            >
              &#8678; Main About
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {mainAbout ? (
        <div className="aboutContainer">
          <div></div>
          <div></div>
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
          <div className="hoverForSkills">
            <div
              className="hoverAreaSkills"
              onClick={() => {
                setSkills(true);
                setMainAbout(false);
              }}
            >
              &#8678; Skills
            </div>
          </div>
          <div className="hoverForExperiences">
            <div
              className="hoverAreaExp"
              onClick={() => {
                setExperiences(true);
                setMainAbout(false);
              }}
            >
              Experiences &#8680;
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
