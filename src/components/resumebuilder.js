import React, { useState} from "react";
import Basic from "./builder-parts/Basic";
import Profile from "./builder-parts/Profile";
import Work from "./builder-parts/Work";

function ResumeBuilder(props) {

  const [BasicData] = useState(props.data.basics);
  const [EmploymentData] = useState(props.data.work);
   const [ProfileData] = useState(props.data.basics.profiles);
  return (
    <div>
      <h1>Resume Builder</h1>
      <div className="Accordion">
      <Basic resume={props.resume} data={BasicData} write={props.write}/>
      <Profile resume={props.resume} data={ProfileData} write={props.write}/>
      <Work  resume={props.resume} data={EmploymentData} write={props.write}/>
      </div>
    </div>
  );
}

export default ResumeBuilder;
