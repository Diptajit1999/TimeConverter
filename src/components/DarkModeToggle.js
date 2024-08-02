import React from "react";
import "../styles/DarkModeToggle.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="dark-mode-toggle" onClick={handleToggle}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
