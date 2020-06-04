import React, { useState, useEffect } from "react";
//import "./App.css";
// import './design/viewer.css';
import './design/buildera.css'
import ResumeBuilder from "./components/resumebuilder";
import ResumeDisplay from "./components/resumedisplay";

import init from "./data/resume.json";

function App() {
  const [Resume, setResume] = useState([]);
  const [Display, setDisplay] = useState(true);
  const [Active, setActive] = useState("");
  useEffect(() => {
    const ResumeData = localStorage.getItem("My-Resume");
    if (ResumeData) {
      const ParsedResume = JSON.parse(ResumeData);

      if (ParsedResume !== []) {
        setResume(ParsedResume);
      } else {
        setResume(init);
      }
    }
  }, []);

  const UpdateLocal=()=>{
    localStorage.setItem("My-Resume",JSON.stringify(Resume));
  }
  useEffect(()=>{console.log("update")},[Resume])

  return (
    <div className="App">
      <header>Resume Builder</header>
      {Resume.length!==0?(
      <div className="builder">
        
        <ResumeBuilder display={[Display,setDisplay]} active={[Active,setActive]} resume={[Resume,setResume]} data={Resume} write={UpdateLocal} />
        <ResumeDisplay display={[Display,setDisplay]} data={Resume} />
        <div id="controls">
          <span onClick={(e)=>{setDisplay(false)}}>Update</span><span onClick={(e)=>{setDisplay(true)}}>View</span>
          </div>

      </div>):null
}
    </div>
  );
}

export default App;
