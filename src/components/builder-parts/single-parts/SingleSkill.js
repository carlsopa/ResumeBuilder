import React from "react";

function SingleSkill(props) {
  return (
    <div >
      <ul>
        <li className="SingleInstance">
          <label htmlFor="name">Skill Name:</label>
          <input
            type="text"
            id="name"
            value={props.data.name}
            onChange={(e) => {
              props.CategoryUpdate(e, props.index);
            }}
          />
          <ul>
            <label>Skills:</label>
            {props.data.keywords.map((data, index) => {
              return (
                <li key={index}>
                  <input
                    type="text"
                    
                    value={data}
                    onChange={(e) => {
                      props.KeyWordUpdate(e, index, props.index);
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <div
            onClick={(e) => {
              props.AddKeyWord(props.index);
            }}
          >
            Add SKill
          </div>
        </li>
      </ul>
      <div
        onClick={(e) => {
          props.RemoveSkill(props.index);
        }}
      >
        Remove
      </div>
    </div>
  );
}

export default SingleSkill;
