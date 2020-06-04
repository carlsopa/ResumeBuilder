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

  const accordion = (event) =>{
    const NextElement = event.target.nextElementSibling;
    console.log(event.target.nextElementSibling.childNodes[0].nextElementSibling)
    if(!event.target.className.includes("active")){
      NextElement.style.maxHeight = NextElement.scrollHeight + "px"}
    else{
      NextElement.style.maxHeight = 0;
    }
  }

  return (
    <div id="editor" className={props.display[0]?"hidden":null}>
      <h1>Resume Builder</h1>
      <div className="Accordion">
        <Basic
          resume={props.resume}
          data={props.data.basics}
          write={props.write}
          display={accordion}
        />
        <Profile
          resume={props.resume}
          data={props.data.basics.profiles}
          write={props.write}
          display={accordion}
        />
        <Work
          resume={props.resume}
          data={props.data.work}
          write={props.write}
          display={accordion}
        />
        <Skills
          resume={props.resume}
          data={props.data.skills}
          write={props.write}
          display={accordion}
        />
        <Education
          resume={props.resume}
          data={props.data.education}
          write={props.write}
          display={accordion}
        />
        <Awards
        resume={props.resume}
        data={props.data.awards}
        write={props.write}
        display={accordion}
        />
        <Interests
        resume={props.resume}
        data={props.data.interests}
        write={props.write}
        display={accordion}/>
        <References
        resume={props.resume}
        data={props.data.references}
        write={props.write}
        display={accordion}/>
      </div>
    </div>
  );
}

export default ResumeBuilder;
