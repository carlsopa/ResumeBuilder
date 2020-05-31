import React, { useState } from "react";

function SingleJob(props) {
  const [End, setEnd] = useState(false);
  const [Bullet, setBullet] = useState(false);

  const [SummaryText, setSummaryText] = useState("");
  const [SummaryBullet, setSummaryBullet] = useState([]);

  return (
    <div id="row" className="BuilderPiece" key={props.index}>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        value={props.data.company}
        onChange={(e) => props.change(e, props.index)}
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        value={props.data.position}
        onChange={(e) => props.change(e, props.index)}
      />
      <div className="Button" id="RemoveProfile">
        Remove
      </div>
      <div className="span">
        Are you still employed
        <label htmlFor="EmployedYes">Yes</label>
        <input
          type="radio"
          name="employment"
          id="EmployedYes"
          onChange={(e) => setEnd(false)}
        />
        <label htmlFor="EmployedNo">No</label>
        <input
          type="radio"
          name="employment"
          id="EmployedNo"
          onChange={(e) => setEnd(true)}
        />
      </div>
      <label htmlFor="startDate">Start Date(MM/YYYY):</label>
      <input
        id="startDate"
        type="text"
        value={props.data.startDate}
        onChange={(e) => props.change(e, props.index)}
      />
      <label htmlFor="endDate">End Date(MM/YYYY):</label>
      {End ? (
        <input
          id="endDate"
          type="text"
          value={props.data.endDate}
          onChange={(e) => props.change(e, props.index)}
        />
      ) : (
        <input id="endDate" type="text" value="" readOnly />
      )}
      <div className="span" id="SummarySection">
        <label htmlFor="TextSummaryRadio">Text Summary</label>
        <input
          input="TextSummaryRadio"
          name="summary"
          type="radio"
          onChange={(e) => setBullet(false)}
        />
        <label htmlFor="BulletSummaryRadio">Bullet Summary</label>
        <input
          id="BulletSummaryRadio"
          name="summary"
          type="radio"
          onChange={(e) => setBullet(true)}
        />
      </div>
      <label htmlFor="TextSummary">Description</label>
      <input
        type="text"
        className={!Bullet ? "span" : "span hidden"}
        id="TextSummary"
      />
      <div id="BulletSummary" className={Bullet ? "visible" : "hidden"}>
        <span>Summary</span>
        <ul>
          <li>
            <input type="text" />
          </li>
        </ul>
        <div className="Button" id="RemoveProfile">
          Add
        </div>
      </div>
      <div
        className="Button"
        id="RemoveProfile"
        onClick={(e) => {
          props.remove(props.index);
        }}
      >
        Remove
      </div>
    </div>
  );
}

export default SingleJob;
