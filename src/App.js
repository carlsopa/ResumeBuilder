import React, { useState, useEffect } from "react";
//import "./App.css";
import './design/builder.css'
import ResumeBuilder from "./components/resumebuilder";
import ResumeDisplay from "./components/resumedisplay";

import init from "./data/resume.json";

function App() {
  const [Resume, setResume] = useState([]);
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
  return (
    <div className="App">
      <header>Resume Builder</header>
      <div className="builder">
        <ResumeBuilder data={Resume} />
        <ResumeDisplay data={Resume} />
      </div>
    </div>
  );
}

export default App;
