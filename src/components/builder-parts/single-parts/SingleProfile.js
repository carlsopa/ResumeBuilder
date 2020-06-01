import React from "react";

function SingleProfile(props) {
  return (
    <div key={props.index} className="BuilderPiece" id="row">
      <label htmlFor="network">Network:</label>
      <input
        data-id={props.index}
        type="text"
        id="network"
        value={props.data.network}
        onChange={(e) => props.change(e, props.index)}
      />
      <label htmlFor="url">Link:</label>
      <input
        data-id={props.index}
        type="text"
        id="url"
        value={props.data.url}
        onChange={(e) => props.change(e, props.index)}
      />

      <div onClick={(e)=>props.remove(props.index)}>Remove</div>
    </div>
  );
}

export default SingleProfile;
