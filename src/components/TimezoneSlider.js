import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/TimezoneSlider.css";

const TimezoneSlider = ({ selectedTime, setSelectedTime }) => {
  const handleSliderChange = (value) => {
    const newTime = new Date(selectedTime.getTime());
    newTime.setHours(value);
    setSelectedTime(newTime);
  };

  return (
    <div className="timezone-slider">
      <Slider
        min={0}
        max={23}
        defaultValue={selectedTime.getHours()}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default TimezoneSlider;
