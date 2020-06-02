import React from "react";

function SingleAward(props) {
  return (
    <div className="BuilderPiece">
      <label htmlFor="title">Award</label>
      <input
        type="text"
        id="title"
        value={props.data.title}
        onChange={(e) => {
          props.Update(e, props.index);
        }}
      />
      <label htmlFor="awarder">Awarder</label>
      <input
        type="text"
        id="awarder"
        value={props.data.awarder}
        onChange={(e) => {
          props.Update(e, props.index);
        }}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        value={props.data.date}
        onChange={(e) => {
          props.Update(e, props.index);
        }}
      />
      <label htmlFor="summary">Summary</label>
      <input
        type="text"
        id="summary"
        value={props.data.summary}
        onChange={(e) => {
          props.Update(e, props.index);
        }}
      />
      <div onClick={(e) => props.Remove(props.index)}>Remove</div>
    </div>
  );
}

export default SingleAward;
