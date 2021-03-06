import React from "react";

function SingleJob(props) {
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
          name={"employment" + props.index}
          id="EmployedYes"
          checked={props.data.employed}
          onChange={(e) => props.option("employed", true, props.index)}
        />
        <label htmlFor="EmployedNo">No</label>
        <input
          type="radio"
          name={"employment" + props.index}
          id="EmployedNo"
          checked={!props.data.employed}
          onChange={(e) => props.option("employed", false, props.index)}
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
      {!props.data.employed ? (
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
          name={"summary" + props.index}
          type="radio"
          checked={!props.data.bulletDisplay}
          onChange={(e) => props.option("bulletDisplay", false, props.index)}
        />
        <label htmlFor="BulletSummaryRadio">Bullet Summary</label>
        <input
          id="BulletSummaryRadio"
          name={"summary" + props.index}
          type="radio"
          checked={props.data.bulletDisplay}
          onChange={(e) => props.option("bulletDisplay", true, props.index)}
        />
      </div>
      <label htmlFor="TextSummary">Description</label>
      <input
        type="text"
        className={!props.data.bulletDisplay ? "span" : "span hidden"}
        id="TextSummary"
        value={props.data.summary}
        onChange={(e) => props.su(e, props.data.bulletDisplay, props.index)}
      />
      <div
        id="BulletSummary"
        className={props.data.bulletDisplay ? "visible" : "hidden"}
      >
        <span>Summary</span>
        <ul>
          <li>
            {props.data.highlights ? (
              props.data.highlights.map((value, position) => {
                return (
                  <input
                    key={position}
                    value={value}
                    onChange={(e) =>
                      props.su(
                        e,
                        props.data.bulletDisplay,
                        props.index,
                        position
                      )
                    }
                  />
                );
              })
            ) : (
              <input
                value={""}
                onChange={(e) =>
                  props.su(e, props.data.bulletDisplay, props.index)
                }
              />
            )}
          </li>
        </ul>
        <div
          className="Button"
          id="RemoveProfile"
          onClick={(e) => props.hadd(props.index)}
        >
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
