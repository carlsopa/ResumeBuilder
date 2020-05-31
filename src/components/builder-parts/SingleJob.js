import React, { useState } from "react";

function SingleJob(props) {
  const [End, setEnd] = useState(false);
  const [Bullet, setBullet] = useState(false);
  const [Company, setCompany] = useState(props.data.company);
  const [Position, setPosition] = useState(props.data.position);
  const [StartDate, setStartDate] = useState(props.data.startDate);
  const [EndDate, setEndDate] = useState(props.data.endDate);
  const [SummaryText, setSummaryText] = useState("");
  const [SummaryBullet, setSummaryBullet] = useState([]);

  return (
    <div id="row" className="BuilderPiece" key={props.index}>
      <label htmlFor="Company">Company:</label>
      <input
        type="text"
        value={Company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <label htmlFor="Position">Position:</label>
      <input
        type="text"
        value={Position}
        onChange={(e) => setPosition(e.target.value)}
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
      <label htmlFor="StartDate">Start Date(MM/YYYY):</label>
      <input
        id="StartDate"
        type="text"
        value={StartDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="EndDate">End Date(MM/YYYY):</label>
      {End ? (
        <input
          id="EndDate"
          type="text"
          value={EndDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      ) : (
        <input id="EndDate" type="text" readOnly />
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
      <div className="Button" id="RemoveProfile" onClick={(e)=>{props.remove(props.index)}}>
        Remove
      </div>
    </div>
  );
}

export default SingleJob;
