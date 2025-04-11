import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const { isDarkMode, toggleDarkMode } = props;
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutus}
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-outline-primary"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutus: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title",
  aboutus: "About Us",
};
