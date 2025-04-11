import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("Enter Your Text Here");

  const handleOnUpperClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleOnLowerClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleOnTitleClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    settext(newText);
  };

  const handleOnClearClick = () => {
    settext("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("✅ Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    settext(newText);
  };

  const handleOnchange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className={`form-control ${
                props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnchange}
            ></textarea>

            <button
              className="btn btn-primary mt-2"
              onClick={handleOnUpperClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary mx-2 mt-2"
              onClick={handleOnLowerClick}
            >
              Convert to Lowercase
            </button>
            <button
              className="btn btn-primary mx-2 mt-2"
              onClick={handleOnTitleClick}
            >
              Convert to Titlecase
            </button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleCopy}>
              Copy Text
            </button>
            <button
              className="btn btn-primary mx-2 mt-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button
              className="btn btn-primary mx-2 mt-2"
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
          {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
          {text.length} characters
        </p>
      </div>
    </>
  );
}
