import "../ModernApp.css";
// import skillsChartDraft from "../Images/skillsChartDraft.jpeg";
import { useState, useEffect, useLayoutEffect } from "react";
import HeadStandCard from "./HeadStandCard";
import SkillsCard from "./SkillsCard";
import ExperiencesCard from "./ExperiencesCard";
import NavLoader from "./NavLoader";
import { IconSwapCalls } from "@aws-amplify/ui-react";
import AboutCard from "./AboutCard";

const About = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  return (
    <div className="wrap" id="wrap">
      <div className="container" id="container">
        {isLoading ? <NavLoader page="about" /> : ""}

        <div className="aboutMainContainer">
          <AboutCard />
        </div>
      </div>
    </div>
  );
};
export default About;

//   // 1 --> show arrow
//   // 0 --> hide arrow
//   const [arrows, setArrows] = useState([1,1])

//   useLayoutEffect(() => {
//     if (isLoading) {
//       document.getElementById("dot1").style.background = `white`;
//       document.getElementById("dot2").style.background = `#a7cae1`;
//       document.getElementById("dot3").style.background = `white`;

//       // Need to load to main about page, not skills
//       document.getElementById("container").scrollLeft = 1400;
//       console.log(document.getElementById("container").scrollLeft);

//     }
//     setTimeout(() => {
//       setLoading(false);
//     }, 1090);
//   }, []);

//   const swapL = () => {
//     // -1000
//     console.log(document.getElementById("container").scrollLeft);

//     if (document.getElementById("container").scrollLeft > 2000) {
//       document.getElementById("container").scrollLeft = 1400; // For Safari
//       document.getElementById("container").scrollLeft = 1400; // For Chrome, Firefox, IE and Opera

//       document.getElementById("dot1").style.background = `white`;
//       document.getElementById("dot2").style.background = `#a7cae1`;
//       document.getElementById("dot3").style.background = `white`;
//       setArrows([1,1])
//     } else {
//       document.getElementById("container").scrollLeft = 0; // For Safari
//       document.getElementById("container").scrollLeft = 0; // For Chrome, Firefox, IE and Opera

//       document.getElementById("dot1").style.background = `#a7cae1`;
//       document.getElementById("dot2").style.background = `white`;
//       document.getElementById("dot3").style.background = `white`;
//       setArrows([0,1])
//     }
//   };

//   const swapR = () => {
//     // +1000
//     console.log(document.getElementById("container").scrollLeft);

//     if (document.getElementById("container").scrollLeft < 1) {
//       document.getElementById("container").scrollLeft = 1400; // For Safari
//       document.getElementById("container").scrollLeft = 1400; // For Chrome, Firefox, IE and Opera

//       document.getElementById("dot1").style.background = `white`;
//       document.getElementById("dot2").style.background = `#a7cae1`;
//       document.getElementById("dot3").style.background = `white`;
//       setArrows([1,1])
//     } else {
//       document.getElementById("container").scrollLeft = 2800; // For Safari
//       document.getElementById("container").scrollLeft = 2800; // For Chrome, Firefox, IE and Opera

//       document.getElementById("dot1").style.background = `white`;
//       document.getElementById("dot2").style.background = `white`;
//       document.getElementById("dot3").style.background = `#a7cae1`;
//       setArrows([1,0])
//     }
//   };

//   return (
//     <div className="wrap" id="wrap">
//       <div className="container" id="container">
//         {isLoading ? <NavLoader page="about" /> : ""}

//         {isLoading ? "" : <div className="horiPage" id="1">
//           <div className="aboutSkills">
//             <SkillsCard />
//           </div>
//         </div>}

//         <div className="horiPage" id="2">

//           <div className="aboutMainContainer">
//             <AboutCard />
//           </div>

//         </div>

//         <div className="horiPage" id="3">
//           <div className="experiencesContainer">
//             <div className="aboutExperiences">
//               <div>
//                 <ExperiencesCard experience="Leading" />
//               </div>
//               <div>
//                 <ExperiencesCard experience="Collaborating" />
//               </div>
//               <div>
//                 <ExperiencesCard experience="Exploring" />
//               </div>
//               <div>
//                 <ExperiencesCard experience="Learning" />
//               </div>
//               <div>
//                 <ExperiencesCard experience="Interning" />
//               </div>
//               <div>
//                 <ExperiencesCard experience="Overcoming" />
//               </div>
//             </div>
//             {arrows[0] == 1 ? (<div
//               className="returnToAboutLeft"
//               onClick={() => {
//                 swapL();
//               }}
//             >
//               &#8678;
//             </div>) : ''}
//             <div className="dots">
//               <div className="dot1" id="dot1"></div>
//               <div className="dot2" id="dot2"></div>
//               <div className="dot3" id="dot3"></div>
//             </div>
//             {arrows[1] == 1 ? (<div
//               className="returnToAboutRight"
//               onClick={() => {
//                 swapR();
//               }}
//             >
//               &#8680;
//             </div>) : ''}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
