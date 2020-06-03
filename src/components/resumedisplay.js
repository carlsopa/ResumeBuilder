import React from "react";
import user from "../images/user.svg";

function ResumeDisplay(props) {
  return (
    <div id="display" className={!props.display[0] ? "hidden" : null}>
      <h1>Resume Display</h1>
      <div id="profile">
        <img id="profilepic" src={user} alt="profile" />
        <span id="name">{props.data.basics.name}</span>
        <span id="title">{props.data.basics.label}</span>
      </div>
      <div id="contact">
        <div id="address">
          <span>{props.data.basics.location.address}</span>
          <span>{props.data.basics.location.city}</span>
          <span>{props.data.basics.location.region}</span>
          <span>{props.data.basics.location.postalCode}</span>
          <span>{props.data.basics.email}</span>
          <span>{props.data.basics.phone}</span>
          <span>{props.data.basics.website}</span>
        </div>
        <div id="social">
          {props.data.basics.profiles.map((data, index) => (
            <span key={index}>{data.url}</span>
          ))}
        </div>
      </div>
      <div id="background">
        <span id="about">{props.data.basics.summary}</span>
        <span class="heading">Experience</span>
        {props.data.work.map((data, index) => {
          return (
            <div class="job" key={index}>
              <span className="title">{data.position}</span>
              <span id="company">{data.company}</span>
              <span id="employmenttime">
                {data.startDate} - {data.endDate}
              </span>
              <span id="summary">{data.summary}</span>
              <div id="highlights">
                <ul id="highlights">
                  {data.highlights.map((data, index) => (
                    <li id="singlehighlight" key={index}>
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div id="skillSection">
        <span id="skillheading" className="heading">
          Skills
        </span>
        {props.data.skills.map((data, index) => {
          return (
            <div className="skills" key="index">
              <span className="title">{data.name}</span>
              <ul>
                {data.keywords.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div id="educationSection">
        <span className="heading">Education</span>
        {props.data.education.map((data, index) => {
          return (
            <div className="education" key={index}>
              <span id="degree" className="title">
                {data.area}
              </span>
              <span>{data.studyType}</span>
              <span id="location">{data.location}</span>
              <span id="date">
                {data.startDate} - {data.endDate}
              </span>
            </div>
          );
        })}
      </div>
      <div id="awardSection">
        <span className="heading">Awards</span>
        {props.data.awards.map((data, index) => {
          return (
            <div id="award" key={index}>
              <span className="title">{data.title}</span>
              <span>{data.awarder}</span>
              <span>{data.date}</span>
              <span id="awardDescription">{data.summary}</span>
            </div>
          );
        })}
      </div>
      <div id="interestSection">
        <span id="interestHeading" className="heading">Interests</span>
        {props.data.interests.map((data, index) => {
          return (
            <div className="skills" key="index">
              <span className="title">{data.name}</span>
              <ul>
                {data.keywords.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div id="referenceSection">
        <span className="heading">References</span>
        {props.data.references.map((data, index) => {
          return (
            <div key={index}>
              <span className="title">{data.name}</span>
              <span id="reference">{data.reference}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResumeDisplay;
