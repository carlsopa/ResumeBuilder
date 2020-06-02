import React from "react";

function ResumeDisplay(props) {
  console.log(props.data);
  return (
    <div>
      <h1>Resume Display</h1>
      <img src={props.data.basics.picture} alt="profile" />
      <span>{props.data.basics.name}</span>
      <span>{props.data.basics.label}</span>
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
        <span>About</span>
        <span>{props.data.basics.summary}</span>
        <span>Experience</span>
        {props.data.work.map((data, index) => {
          return (
            <div key={index}>
              <span>{data.position}</span>
              <span>{data.company}</span>
              <span>{data.startDate}</span>
              <span>{data.endDate}</span>
              <span>{data.summary}</span>
              <div id="highlights">
                <ul>
                  {data.highlights.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div id="skills">
        {props.data.skills.map((data, index) => {
          return <div key="index">
              <span>{data.name}</span>
              <ul>
                  {data.keywords.map((data,index)=>{
                      return(<li key={index}>{data}</li>)
                  })}
              </ul>
          </div>;
        })}
      </div>
      <div id="education">
          {props.data.education.map((data,index)=>{
              return(
                  <div key={index}>
                      <span>{data.area}</span>
                      <span>{data.studyType}</span>
                      <span>{data.location}</span>
                      <span>{data.startDate} - {data.endDate}</span>
                      </div>
              )
          })}
      </div>
      <div id="awards">
      {props.data.awards.map((data,index)=>{
              return(
                  <div key={index}>
                      <span>{data.title}</span>
                      <span>{data.awarder}</span>
                      <span>{data.date}</span>
                      <span>{data.summary}</span>
                      </div>
              )
          })}
      </div>
      <div id="interests">
      {props.data.interests.map((data, index) => {
          return <div key="index">
              <span>{data.name}</span>
              <ul>
                  {data.keywords.map((data,index)=>{
                      return(<li key={index}>{data}</li>)
                  })}
              </ul>
          </div>;
        })}
      </div>
      <div id="references">
      {props.data.references.map((data,index)=>{
              return(
                  <div key={index}>
                      <span>{data.name}</span>
                      <span>{data.reference}</span>
                      </div>
              )
          })}
      </div>
    </div>
  );
}

export default ResumeDisplay;
