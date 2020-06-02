import React, { useState, useEffect } from "react";
import SingleEducation from "./single-parts/SingleEducation";

function Education(props) {
  const [EducationActive, setEducationActive] = useState(false);
  const [EducationData, setEducationData] = useState(props.data);

  useEffect(() => {
    const NewResume = props.resume[0];
    NewResume["education"] = EducationData;
    props.write();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [EducationData]);

  const EducationAdd = () => {
    setEducationData((prev) => [
      ...prev,

      {
        institution: "",
        location: "",
        area: "",
        studyType: "",
        startDate: "",
        endDate: "",
        gpa: "",
        courses: [""],
      },
    ]);
  };
  const EducationRemove = (index) => {
    const newarr = [...EducationData];
    newarr.splice(index, 1);
    setEducationData(newarr);
  };
  const CourseAdd = (index) => {
    const newSkillSet = EducationData[index]["courses"];
    newSkillSet.push("");
    const newarr = [...EducationData];
    newarr[index]["courses"] = newSkillSet;
    setEducationData(newarr);
  };
  const CourseUpdate = (event, position, index) => {
    const newarr = [...EducationData];
    newarr[index]["courses"][position] = event.target.value;
    setEducationData(newarr);
  };
  const EducationUpdate = (event, index) => {
    const newarr = [...EducationData];
    newarr[index][event.target.id] = event.target.value;
    setEducationData(newarr);
  };

  return (
    <div className="ParentPiece">
      <div
        className={EducationActive ? "header active" : "header"}
        onClick={(e) => setEducationActive(!EducationActive)}
      >
        Education
      </div>
      <div className="content">
        <div className="body">
          {EducationData.map((data, index) => {
            return (
              <SingleEducation
                key={index}
                index={index}
                data={data}
                EducationUpdate={EducationUpdate}
                EducationRemove={EducationRemove}
                CourseUpdate={CourseUpdate}
                CourseAdd={CourseAdd}
              />
            );
          })}
          <div
            onClick={(e) => {
              EducationAdd();
            }}
          >
            Add
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
