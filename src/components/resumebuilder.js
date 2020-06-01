import React, { useState } from "react";
import Basic from "./builder-parts/Basic";
import Profile from "./builder-parts/Profile";
import Work from "./builder-parts/Work";
import Skills from "./builder-parts/Skills";
import Education from "./builder-parts/Education";

function ResumeBuilder(props) {
  const [BasicData] = useState(props.data.basics);
  const [EmploymentData] = useState(props.data.work);
  const [ProfileData] = useState(props.data.basics.profiles);
  const [SkillsData] = useState(props.data.skills);
  return (
    <div>
      <h1>Resume Builder</h1>
      <div className="Accordion">
        <Basic
          resume={props.resume}
          data={props.data.basics}
          write={props.write}
        />
        <Profile
          resume={props.resume}
          data={props.data.basics.profiles}
          write={props.write}
        />
        <Work
          resume={props.resume}
          data={props.data.work}
          write={props.write}
        />
        <Skills
          resume={props.resume}
          data={props.data.skills}
          write={props.write}
        />
        <Education
          resume={props.resume}
          data={props.data.education}
          write={props.write}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;
