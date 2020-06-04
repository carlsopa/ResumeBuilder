import React, { useState, useEffect } from "react";
import SingleProfile from "./single-parts/SingleProfile";

function Profile(props) {
  const [ProfileActive, setProfileActive] = useState(false);
  const [Profiles, setProfiles] = useState(props.data);

  useEffect(() => {
    const newResume = props.resume[0];
    newResume["basics"]["profiles"] = Profiles;
    props.write();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Profiles]);

  const ProfileAdd = (event) => {
    setProfiles((prev) => [...prev, { network: "", url: "" }]);
  };
  const ProfileRemove = (index) => {
    const newarr = [...Profiles];
    newarr.splice(index, 1);
    setProfiles(newarr);
  };
  const update = (event, index) => {
    const newarr = [...Profiles];
    newarr[index][event.target.id] = event.target.value;
    setProfiles(newarr);
  };
  return (
    <div className="ParentPiece">
      <div
        className={ProfileActive ? "header active" : "header"}
        onClick={(e) => {return(setProfileActive(!ProfileActive),props.display(e))}}
        id="design.profile"
      >
        Profiles
      </div>
      <div className="content">
        <div className="body">
          {Profiles.map((data, index) => {
            return (
              <SingleProfile
                key={index}
                data={data}
                index={index}
                change={update}
                remove={ProfileRemove}
              />
            );
          })}
          <div onClick={(e) => ProfileAdd(e)}>Add</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
