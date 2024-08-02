import React from "react";
import "../styles/ScheduleMeetButton.css";

const ScheduleMeetButton = ({ selectedTime }) => {
  const scheduleMeet = () => {
    // Logic to schedule a 2-hour Google Meet
  };

  return (
    <button className="schedule-meet-btn" onClick={scheduleMeet}>
      Schedule Meet
    </button>
  );
};

export default ScheduleMeetButton;
