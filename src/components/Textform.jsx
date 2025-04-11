import React, { useState } from "react";

export default function Textform(prop) {
  const handleOnUpperClick = () => {
    console.log("Upper case button was clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleOnLowerClick = () => {
    console.log("Lower case button was clicked");
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleOnTitleClick = () => {
    console.log("Title case button was clicked");

    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    settext(newText);
  };

  const handleOnClearClick = () => {
    console.log("Text was cleared");
    let newtext = "";
    settext(newtext);
  };

  const handleOnchange = (event) => {
    console.log("Onchnage");
    settext(event.target.value);
  };
  const [text, settext] = useState("Enter Your Text Here");
  return (
    <>
      <div className="container">
        <div>
          <h2>{prop.heading}</h2>
          <div className="mb-3">
            <textarea
              className={`form-control ${
                prop.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnchange}
            ></textarea>
            <button className="btn btn-primary" onClick={handleOnUpperClick}>
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={handleOnLowerClick}
            >
              Convert to Lowercase
            </button>
            <button className="btn btn-primary mx" onClick={handleOnTitleClick}>
              Convert to Titlecase
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={handleOnClearClick}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
