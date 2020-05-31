import React, { useState, useEffect } from "react";
import Address from "./Address";

function Basic(props) {
  const [BasicActive, setBasicActive] = useState(false);
  const [Basic, setBasic] = useState(props.data);

  useEffect(() => {
    const newResume = props.resume[0];
    Object.keys(Basic).map((key) => {
      return newResume["basics"][key] !== Basic[key]
        ? (newResume["basics"][key] = Basic[key])
        : null;
    });

    props.write();
  }, [Basic]);

  const Update = (event) => {
    setBasic({ ...Basic, [event.target.id]: event.target.value });
  };

  return (
    <div className="ParentPiece">
      <div
        className={BasicActive ? "header active" : "header"}
        onClick={(e) => setBasicActive(!BasicActive)}
      >
        Basic info
      </div>
      <div className="content">
        <div className="body" id="row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={Basic.name}
            onChange={(e) => Update(e)}
          />
          <label htmlFor="label">Title:</label>
          <input
            type="text"
            id="label"
            value={Basic.label}
            onChange={(e) => Update(e)}
          />
          <label htmlFor="Picture">Image:</label>
          <input
            type="file"
            id="Picture"
            value={Basic.picture}
            onChange={(e) => Update(e)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={Basic.email}
            onChange={(e) => Update(e)}
          />
          <label htmlFor="phone">Phone number:</label>
          <input
            type="text"
            id="phone"
            value={Basic.phone}
            onChange={(e) => Update(e)}
          />
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            value={Basic.summary}
            onChange={(e) => Update(e)}
          />
          <Address
            resume={props.resume}
            data={props.data.location}
            write={props.write}
          />
        </div>
      </div>
    </div>
  );
}

export default Basic;
