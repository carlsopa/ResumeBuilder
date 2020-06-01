import React, { useState, useEffect } from "react";
import SingleSkill from "./single-parts/SingleSkill";

function Skills(props) {
  const [SkillsActive, setSkillsActive] = useState(false);
  const [SkillsData, setSkillsData] = useState(props.data);

  useEffect(() => {
    const NewResume = props.resume[0];
    NewResume["skills"] = SkillsData;
    props.write();
  }, [SkillsData]);

  const SkillSetAdd = (index) => {
    const newSkillSet = SkillsData[index]["keywords"];
    newSkillSet.push("");
    const newarr = [...SkillsData];
    newarr[index]["keywords"] = newSkillSet;
    setSkillsData(newarr);
  };
  const SkillAdd = () => {
    console.log("add");
    setSkillsData((prev) => [
      ...prev,
      {
        name: "",
        level: "Master",
        keywords: [""],
      },
    ]);
  };
  const SkillRemove = (index) => {
    const newarr = [...SkillsData];
    newarr.splice(index, 1);
    setSkillsData(newarr);
  };
  const SkillUpdate = (event, position, index) => {
    const newarr = [...SkillsData];
    newarr[index]["keywords"][position] = event.target.value;
    setSkillsData(newarr);
  };
  const CategoryUpdate = (event, index) => {
    const newarr = [...SkillsData];
    newarr[index]["name"] = event.target.value;
    setSkillsData(newarr);
  };

  return (
    <div className="ParentPiece">
      <div
        className={SkillsActive ? "header active" : "header"}
        onClick={(e) => setSkillsActive(!SkillsActive)}
      >
        Skill Set
      </div>
      <div className="content">
        <div className="body">
          {SkillsData.map((data, index) => {
            return (
              <SingleSkill
                index={index}
                data={data}
                AddKeyWord={SkillSetAdd}
                KeyWordUpdate={SkillUpdate}
                CategoryUpdate={CategoryUpdate}
                RemoveSkill={SkillRemove}
              />
            );
          })}
          <div
            onClick={(e) => {
              SkillAdd();
            }}
          >
            Add
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
