import React, { useState, useEffect } from "react";
import SingleJob from "./SingleJob";

function Work(props) {
  const [WorkActive, setWorkActive] = useState(false);
  const [Jobs, setJobs] = useState(props.data);

  useEffect(() => {
    const NewResume = props.resume[0];
    NewResume["work"] = Jobs;
    props.write();
  }, [Jobs]);

  const JobAdd = (event) => {
    setJobs((prev) => [
      ...prev,
      {
        work: props.resume[0]["work"],
      },
    ]);
  };
  const HighLightAdd = (index) => {
    const newHighLight = Jobs[0]["highlights"];
    newHighLight.push("");
    const newarr = [...Jobs];
    newarr[index]["highlights"] = newHighLight;
    setJobs(newarr);
  };
  const JobRemove = (index) => {
    const newarr = [...Jobs];
    newarr.splice(index, 1);
    setJobs(newarr);
  };

  const update = (event, index) => {
    const newarr = [...Jobs];
    newarr[index][event.target.id] = event.target.value;
    setJobs(newarr);
  };
  const summaryUpdate = (event, type, index, position) => {
    const newarr = [...Jobs];
    if (!type) {
      newarr[index]["summary"] = event.target.value;
    } else {
      const newHighLight = Jobs[0]["highlights"];
      newHighLight[position] = event.target.value;
      newarr[index]["highlights"] = newHighLight;
    }
    setJobs(newarr);
  };
  const OptionUpdate = (section, value, index) => {
    const newarr = [...Jobs];
    if (section === "employed") {
      newarr[index][section] = value;
    } else if (section === "bulletDisplay") {
      newarr[index][section] = value;
    } else {
      console.log("something went really wrong");
    }
    setJobs(newarr);
  };

  return (
    <div className="ParentPiece">
      <div
        className={WorkActive ? "header active" : "header"}
        onClick={(e) => setWorkActive(!WorkActive)}
      >
        Work History
      </div>
      <div className="content">
        <div className="body">
          {Jobs.map((job, index) => {
            return (
              <SingleJob
                index={index}
                data={job}
                remove={JobRemove}
                change={update}
                su={summaryUpdate}
                hadd={HighLightAdd}
                option={OptionUpdate}
              />
            );
          })}
          <div onClick={(e) => JobAdd(e)}>Add</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
