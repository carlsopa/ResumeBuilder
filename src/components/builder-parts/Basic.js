import React from "react";

function Basic(props) {
  return (
    <div className="BuilderPiece" id="BasicPiece">
      <div id="GeneralPiece">
        <span class="SectionHeader">Basic info</span>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          value={props.data[0]}
          onChange={(e) => props.set[0](e.target.value)}
        />
        <label htmlFor="Title">Title:</label>
        <input
          type="text"
          id="Title"
          value={props.data[1]}
          onChange={(e) => props.set[1](e.target.value)}
        />
        <label htmlFor="Picture">Image:</label>
        <input
          type="file"
          id="Picture"
          value={props.data[2]}
          onChange={(e) => props.set[2](e.target.value)}
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Title"
          value={props.data[3]}
          onChange={(e) => props.set[3](e.target.value)}
        />
        <label htmlFor="Phone">Phone number:</label>
        <input
          type="text"
          id="Phone"
          value={props.data[4]}
          onChange={(e) => props.set[4](e.target.value)}
        />
        <label htmlFor="Summary">Summary:</label>
        <input
          type="text"
          id="Summary"
          value={props.data[5]}
          onChange={(e) => props.set[5](e.target.value)}
        />
      </div>
      <div className="BuilderPiece" id="AddressPiece">
        <span className="SectionHeader">Address</span>

        <label htmlFor="Address">Address:</label>
        <input
          type="text"
          id="Address"
          value={props.data[6]}
          onChange={(e) => props.set[6](e.target.value)}
        />
        <label htmlFor="SecondAddress">Apt/Suite:</label>
        <input
          type="text"
          id="SecondAddress"
          value={props.data[7]}
          onChange={(e) => props.set[7](e.target.value)}
        />
        <label htmlFor="City">City:</label>
        <input
          type="text"
          id="City"
          value={props.data[8]}
          onChange={(e) => props.set[8](e.target.value)}
        />
        <label htmlFor="State">State:</label>
        <input
          type="text"
          id="State"
          value={props.data[9]}
          onChange={(e) => props.set[9](e.target.value)}
        />
        <label htmlFor="Zip">Zip code:</label>
        <input
          type="text"
          id="Zip"
          value={props.data[10]}
          onChange={(e) => props.set[10](e.target.value)}
        />
      </div>
    </div>
  );
}

export default Basic;
