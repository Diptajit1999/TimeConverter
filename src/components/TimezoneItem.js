import React from "react";
import moment from "moment";
import "../styles/TimezoneItem.css";

const TimezoneItem = ({ index, name, offset, time, onTimeChange }) => {
  const formattedTime = moment
    .utc()
    .startOf("day")
    .add(time, "hours")
    .format("h:mm A");

  const handleTimeChange = (event) => {
    const newTime = parseFloat(event.target.value);
    onTimeChange(index, newTime);
  };

  return (
    <div className="timezone-item">
      <div className="timezone-info">
        <h2>{name}</h2>
        <p>{offset}</p>
      </div>
      <div className="timezone-time">
        <input
          type="range"
          min="0"
          max="24"
          step="0.01"
          value={time}
          onChange={handleTimeChange}
        />
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default TimezoneItem;
