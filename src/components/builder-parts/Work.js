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
        work: [
          {
            company: "",
            position: "",
            website: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""],
          },
        ],
      },
    ]);
  };
  const JobRemove = (index) => {
    const newarr = [...Jobs];
    newarr.splice(index, 1);
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
            return <SingleJob index={index} data={job} remove={JobRemove} />;
          })}
          <div onClick={(e) => JobAdd(e)}>Add</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
