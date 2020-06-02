import React from "react";
import Basic from "./builder-parts/Basic";
import Profile from "./builder-parts/Profile";
import Work from "./builder-parts/Work";
import Skills from "./builder-parts/Skills";
import Education from "./builder-parts/Education";
import Awards from "./builder-parts/Awards";
import Interests from "./builder-parts/Interests";
import References from "./builder-parts/Reference";

function ResumeBuilder(props) {

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
        <Awards
        resume={props.resume}
        data={props.data.awards}
        write={props.write}
        />
        <Interests
        resume={props.resume}
        data={props.data.interests}
        write={props.write}/>
        <References
        resume={props.resume}
        data={props.data.references}
        write={props.write}/>
      </div>
    </div>
  );
}

export default ResumeBuilder;
