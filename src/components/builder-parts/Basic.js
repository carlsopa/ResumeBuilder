import React, { useState, useEffect } from "react";
import axios from 'axios';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Basic]);

  const Update = (event) => {
    setBasic({ ...Basic, [event.target.id]: event.target.value });
  };
  const fileUpload=(event)=>{
    console.log(event.target.files[0])
    const file = {selectedFile: event.target.files[0],loaded:0}
    const data = new FormData();
    console.log(file)
    data.append('file',file)
    console.log(data)
    axios.post("/images",data,{})
    .then(res=>{
      console.log(res.statusText)
    })
    //Update(event);
  }


  return (
    <div className="ParentPiece">
      <div
        className={BasicActive ? "header active" : "header"}
        onClick={(e) => {return(setBasicActive(!BasicActive),props.display(e))}}
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
          <label htmlFor="picture">Image:</label>
          <input
            type="file"
            id="picture"
            value={Basic.picture}
            onChange={(e) => fileUpload(e)}
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
          <label htmlFor="design.summary">Summary:</label>
          <input
            type="text"
            id="design.summary"
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
