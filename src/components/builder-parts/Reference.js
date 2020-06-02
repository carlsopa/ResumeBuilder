import React, { useState, useEffect } from "react";
import SingleReference from "./single-parts/SingleReference";

function References(props) {
  const [ReferenceActive, setReferenceActive] = useState(false);
  const [ReferenceData, setReferenceData] = useState(props.data);

  useEffect(() => {
    const NewResume = props.resume[0];
    NewResume["references"] = ReferenceData;
    props.write();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ReferenceData]);

  const ReferenceAdd = () => {
    console.log("add");
    setReferenceData((prev) => [
      ...prev,
      {
        name: "",
        reference: "",
      },
    ]);
  };
  const ReferenceRemove = (index) => {
    const newarr = [...ReferenceData];
    newarr.splice(index, 1);
    setReferenceData(newarr);
  };
  const ReferenceUpdate = (event, index) => {
    const newarr = [...ReferenceData];
    newarr[index][event.target.id] = event.target.value;
    setReferenceData(newarr);
  };

  return (
    <div className="ParentPiece">
      <div
        className={ReferenceActive ? "header active" : "header"}
        onClick={(e) => setReferenceActive(!ReferenceActive)}
      >
        References
      </div>
      <div className="content">
        <div className="body">
          {ReferenceData.map((data, index) => {
            return (
              <SingleReference
                key={index}
                index={index}
                data={data}
                //AddKeyWord={ReferenceAdd}
                ReferenceUpdate={ReferenceUpdate}
                RemoveReference={ReferenceRemove}
              />
            );
          })}
          <div
            onClick={(e) => {
              ReferenceAdd();
            }}
          >
            Add Reference
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
