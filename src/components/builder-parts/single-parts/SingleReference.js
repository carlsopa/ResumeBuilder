import React from "react";

function SingleReference(props) {
  return (
    <div className="BuilderPiece" id="row">
      <label htmlFor="name">Name:</label>
      <input
        data-id={props.index}
        type="text"
        id="name"
        value={props.data.name}
        onChange={(e) => props.ReferenceUpdate(e, props.index)}
      />
      <label htmlFor="reference">Reference:</label>
      <input
        data-id={props.index}
        type="text"
        id="reference"
        value={props.data.reference}
        onChange={(e) => props.ReferenceUpdate(e, props.index)}
      />

      <div onClick={(e)=>props.RemoveReference(props.index)}>Remove</div>
    </div>
  );
}

export default SingleReference;
