import React from "react";

export default function Aboutus(props) {
  return (
    <div
      className={`container my-4 ${
        props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h3>More Details</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                props.isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              🔠 Convert Text to Uppercase
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                props.isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              This feature lets you convert your entire input text to{" "}
              <strong>uppercase</strong> instantly. Useful for headings &
              formatting
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                props.isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              🔡 Convert Text to Lowercase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                props.isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              Quickly transforms your input to <strong>lowercase</strong>. Handy
              for emails, usernames, or just to normalize input data.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                props.isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              🧠 Convert to Capital/Title Case
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body ${
                props.isDarkMode ? "bg-dark text-light" : ""
              }`}
            >
              Converts your text to <strong>Title Case</strong> — capitalizing
              the first letter of every word. Great for titles, form names, and
              making things look professional.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
