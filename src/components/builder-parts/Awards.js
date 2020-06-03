import React, { useState, useEffect } from "react";
import SingleAward from "./single-parts/SingleAward";

function Awards(props) {
  const [AwardData, setAwardData] = useState(props.data);
  const [AwardActive, setAwardActive] = useState(false);

  useEffect(() => {
    const newResume = props.resume[0];
    newResume["awards"] = AwardData;
    props.write();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AwardData]);

  const AwardAdd = (event) => {
    setAwardData((prev) => [
      ...prev,
      {
        title: "",
        date: "",
        awarder: "",
        summary: "",
      },
    ]);
  };
  const AwardRemove = (index) => {
    const newarr = [...AwardData];
    newarr.splice(index, 1);
    setAwardData(newarr);
  };
  const AwardUpdate = (event, index) => {
    const newarr = [...AwardData];
    console.log(newarr);
    newarr[index][event.target.id] = event.target.value;
    setAwardData(newarr);
  };
  return (
    <div className="ParentPiece">
      <div
        className={AwardActive ? "header active" : "header"}
        onClick={(e) => {return(setAwardActive(!AwardActive),props.display(e))}}
      >
        Awards
      </div>
      <div className="content">
        <div className="body">
          {AwardData.map((data, index) => {
            return (
              <SingleAward
                key={index}
                data={data}
                index={index}
                Update={AwardUpdate}
                Remove={AwardRemove}
              />
            );
          })}
          <div onClick={AwardAdd}>Add</div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
