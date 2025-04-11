import React, { useState } from "react";

export default function Textform(prop) {
  const handleOnUpperClick = () => {
    console.log("Upper case button was clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleOnchange = (event) => {
    console.log("Onchnage");
    settext(event.target.value);
  };
  const [text, settext] = useState("Enter Your Text Here");
  return (
    <div>
      <div>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
          <button className="btn btn-primary" onClick={handleOnUpperClick}>
            Convert to Uppercase
          </button>
        </div>
      </div>
    </div>
  );
}
