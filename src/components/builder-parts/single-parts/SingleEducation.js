import React from "react";

function SingleEducation(props) {
  return (
    <div>
      <label htmlFor="institution">University</label>
      <input
        type="text"
        value={props.data.institution}
        id="institution"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        value={props.data.location}
        id="location"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <label htmlFor="area">Degree</label>
      <input
        type="text"
        value={props.data.area}
        id="area"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <label htmlFor="studyType">Degree Type</label>
      <input
        type="text"
        value={props.data.studyType}
        id="studyType"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        value={props.data.startDate}
        id="startDate"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        value={props.data.endDate}
        id="endDate"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <label htmlFor="gpa">GPA:</label>
      <input
        type="text"
        value={props.data.gpa}
        id="gpa"
        onChange={(e) => {
          props.EducationUpdate(e, props.index);
        }}
      />
      <ul>
        {props.data.courses.map((data, index) => {
          return (
            <li>
              <input
                type="text"
                value={data}
                onChange={(e) => {
                  props.CourseUpdate(e, index, props.index);
                }}
              />
            </li>
          );
        })}
        <div
          onClick={(e) => {
            props.CourseAdd(props.index);
          }}
        >
          Add
        </div>
      </ul>
      <div
        onClick={(e) => {
          props.EducationRemove(props.index);
        }}
      >
        Remove
      </div>
    </div>
  );
}

export default SingleEducation;
