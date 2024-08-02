import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Savvy Time Logo" />
          <span>Savvy Time</span>
          <span>World Clock</span>
        </div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/">Converter</a>
          <a href="/">Local Time</a>
          <a href="/">Timers</a>
          <a href="/">Calendar</a>
          <a href="/">Mobile</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
