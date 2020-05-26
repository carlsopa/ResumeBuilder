import React, { useState } from "react";
import Basic from "./builder-parts/Basic";

function ResumeBuilder(props) {
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Email, setEmail] = useState("");
  const [Summary, setSummary] = useState("");
  const [Address, setAddress] = useState("");
  const [Second, setSecond] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");

  const StateArray = [
    Name,
    Title,
    Image,
    Email,
    Summary,
    Address,
    Second,
    City,
    State,
    Zip,
  ];
  const SetArray = [
    setName,
    setTitle,
    setImage,
    setEmail,
    setSummary,
    setAddress,
    setSecond,
    setCity,
    setState,
    setZip,
  ];
  return (
    <div>
      <h1>Resume Builder</h1>
      <Basic data={StateArray} set={SetArray} />
    </div>
  );
}

export default ResumeBuilder;
