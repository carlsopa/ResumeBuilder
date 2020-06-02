import React from "react";

function SingleInterest(props) {
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="name">Interest Name:</label>
          <input
            type="text"
            id="name"
            value={props.data.name}
            onChange={(e) => {props.CategoryUpdate(e,props.index)}}
          />
          <ul>
            <label>keywords:</label>
            {props.data.keywords.map((data, index) => {
              return (
                <li key={index}>
                  <input type="text" value={data} onChange={(e) => {props.KeyWordUpdate(e,index,props.index)}} />
                </li>
              );
            })}
          </ul>
          <div onClick={(e)=>{props.AddKeyWord(props.index)}}>Add Interest</div>
        </li>
      </ul>
      <div onClick={(e)=>{props.RemoveSkill(props.index)}}>Remove</div>
    </div>
  );
}

export default SingleInterest;
