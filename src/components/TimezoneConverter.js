import React from 'react';
import TimezoneList from './TimezoneList';
import TimezoneSlider from './TimezoneSlider';
import '../styles/TimezoneConverter.css';

const TimezoneConverter = ({ timezones, setTimezones, selectedTime, setSelectedTime }) => {
  return (
    <div className="timezone-converter">
      <TimezoneSlider selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <TimezoneList timezones={timezones} setTimezones={setTimezones} selectedTime={selectedTime} />
    </div>
  );
};

export default TimezoneConverter;
