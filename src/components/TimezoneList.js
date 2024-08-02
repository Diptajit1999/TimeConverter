import React from "react";
import TimezoneItem from "./TimezoneItem";
import "../styles/TimezoneList.css";

const TimezoneList = ({ timezones, onTimeChange }) => {
  if (!Array.isArray(timezones)) {
    return <div>Invalid timezones data</div>;
  }

  return (
    <div className="timezone-list">
      {timezones.map((timezone, index) => (
        <TimezoneItem
          key={timezone.name}
          index={index}
          name={timezone.name}
          offset={timezone.offset}
          time={timezone.time}
          onTimeChange={onTimeChange}
        />
      ))}
    </div>
  );
};

export default TimezoneList;
