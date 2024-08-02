import React from "react";
import '../styles/Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-links">
        <a href="/">Home</a> <a href="/">Converter</a> <span>UTC to IST</span>
      </div>
      <div className="time-format">
        <button>12</button>|<button>24</button>
      </div>
    </div>
  );
};

export default Breadcrumb;
