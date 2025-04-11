import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "white";
  }, [isDarkMode]);

  const [alert, setAlert] = useState({ message: "", type: "", show: false });

  const showAlert = (msg, type = "success") => {
    setAlert({ message: msg, type, show: true });
    setTimeout(() => setAlert({ message: "", type: "", show: false }), 2000);
  };

  return (
    <div
      className={
        isDarkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <Navbar
        title="TextUtils"
        aboutus="About Us"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Alert message={alert.message} type={alert.type} show={alert.show} />

      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Enter the text to analyze"
                isDarkMode={isDarkMode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<Aboutus isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
