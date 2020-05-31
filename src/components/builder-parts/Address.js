import React, { useState, useEffect } from "react";

function Address(props) {
  const [AddressData, setAddressData] = useState(props.data);

  useEffect(() => {
    const newResume = props.resume[0];
    Object.keys(AddressData).map((key) => {
      return newResume["basics"]["location"][key] !== AddressData[key]
        ? (newResume["basics"]["location"][key] = AddressData[key])
        : null;
    });

    props.write();
  }, [AddressData]);

  const AddressUpdate = (event) => {
    setAddressData({ ...AddressData, [event.target.id]: event.target.value });
  };
  return (
    <div className="body" id="row address">
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={AddressData.address}
        onChange={(e) => AddressUpdate(e)}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={AddressData.city}
        onChange={(e) => AddressUpdate(e)}
      />
      <label htmlFor="region">State:</label>
      <input
        type="text"
        id="region"
        value={AddressData.region}
        onChange={(e) => AddressUpdate(e)}
      />
      <label htmlFor="postalCode">Zip code:</label>
      <input
        type="text"
        id="postalCode"
        value={AddressData.postalCode}
        onChange={(e) => AddressUpdate(e)}
      />
    </div>
  );
}

export default Address;
