const AboutMe = (theme) => {
  return (
    <div className="aboutMe">
      <div className="aboutTitle">
        <h2>About Me</h2>
      </div>


{/* 

  {
    “samFriedman”: {
        “career”: “softwareEngineer”,
        “expertise”:  {
            “hardSkills”: [“python”, “java”, “reactjs”, “sql”, “dataModeling”],
            “softSkills”: [“leadership”, “cooperation”, “empathy”, “adaptability”]
        },
        “experience”: [“fullStackDevelopment”, “dataMigration”, “etlPipelines”, 
                       “microserviceDevelopment”, “dataAnalysis”],
        “values”: [“universalAccessibility”, “diversePerspectives”, 
                   “continuousLearning”, “collaboration”]
    }  
  } 

*/}


      <div>
        &#123;
        <div style={{paddingLeft: "4vw"}}>“samFriedman”: &#123;</div>
        <div style={{paddingLeft: "8vw"}}>“career”: “softwareEngineer”,</div>
        <div style={{paddingLeft: "8vw"}}>“expertise”:  &#123;</div>
        <div style={{paddingLeft: "12vw"}}>“hardSkills”: [“python”, “java”, “reactjs”, “sql”, “dataModeling”],</div>
        <div style={{paddingLeft: "12vw"}}>“softSkills”: [“leadership”, “cooperation”, “empathy”, “adaptability”]</div>
        <div style={{paddingLeft: "8vw"}}> &#125;,</div>
        <div style={{paddingLeft: "8vw"}}>“experience”: [“fullStackDevelopment”, “dataMigration”, “etlPipelines”,</div>
        <div style={{paddingLeft: "17vw"}}>“microserviceDevelopment”, “dataAnalysis”],</div>
        <div style={{paddingLeft: "8vw"}}>“values”: [“universalAccessibility”, “diversePerspectives”,“continuousLearning”, “collaboration”]</div>
        <div style={{paddingLeft: "4vw"}}> &#125;</div>
        <div>&#125;</div>


       

      </div>
















      {/* <div>
        I’m Sam Friedman, a versatile, motivated problem solver from Baton
        Rouge, LA. <br /><br />Throughout internships, undergrad courses in computer science
        and entrepreneurship, and my career, I have learned to appreciate the
        design thinking process. Whether collaborating with start ups fueled by
        LEAN thinking or contributing to more structured projects anchored by
        agile workflows, I prioritize strategy, efficiency and longevity when
        designing and implementing a solution. <br /><br />I typically use JavaScript,
        ReactJS, CSS and HTML for frontend development. <br /><br />For backend development,
        maintenance, continuous deployment and continuous integration, I often
        turn to AWS Amplify and GitHub. <br /><br />When analyzing data, I frequently
        leverage PL-SQL as well as Python. <br /><br />I developed this site with a combination of
        the full stack tools mentioned above.
      </div> */}
    </div>
  );
};

export default AboutMe;
