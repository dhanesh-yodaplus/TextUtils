import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "white";
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      <Navbar
        title="TextUtils"
        aboutus="About Us"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="container my-3">
        <Textform heading="Enter the text to analyze" isDarkMode={isDarkMode}/>
      </div>

      <Aboutus isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
