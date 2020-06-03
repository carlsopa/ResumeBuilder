import React, { useState, useEffect } from "react";
import SingleInterest from "./single-parts/SingleInterest";

function Interests(props) {
  const [InterestActive, setInterestActive] = useState(false);
  const [InterestData, setInterestData] = useState(props.data);

  useEffect(() => {
    const NewResume = props.resume[0];
    NewResume["interests"] = InterestData;
    props.write();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [InterestData]);

  const InterestKeywordAdd = (index) => {
    const newSkillSet = InterestData[index]["keywords"];
    newSkillSet.push("");
    const newarr = [...InterestData];
    newarr[index]["keywords"] = newSkillSet;
    setInterestData(newarr);
  };
  const InterestAdd = () => {
    console.log("add");
    setInterestData((prev) => [
      ...prev,
      {
        name: "",
        keywords: [""],
      },
    ]);
  };
  const InterestRemove = (index) => {
    const newarr = [...InterestData];
    newarr.splice(index, 1);
    setInterestData(newarr);
  };
  const InterestKeywordUpdate = (event, position, index) => {
    const newarr = [...InterestData];
    newarr[index]["keywords"][position] = event.target.value;
    setInterestData(newarr);
  };
  const InterestUpdate = (event, index) => {
    const newarr = [...InterestData];
    newarr[index]["name"] = event.target.value;
    setInterestData(newarr);
  };

  return (
    <div className="ParentPiece">
      <div
        className={InterestActive ? "header active" : "header"}
        onClick={(e) => {return(setInterestActive(!InterestActive),props.display(e))}}
      >
        Interests
      </div>
      <div className="content">
        <div className="body">
          {InterestData.map((data, index) => {
            return (
              <SingleInterest
                key={index}
                index={index}
                data={data}
                AddKeyWord={InterestKeywordAdd}
                KeyWordUpdate={InterestKeywordUpdate}
                CategoryUpdate={InterestUpdate}
                RemoveSkill={InterestRemove}
              />
            );
          })}
          <div
            onClick={(e) => {
              InterestAdd();
            }}
          >
            Add interest
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;
