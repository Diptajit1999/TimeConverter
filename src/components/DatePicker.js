import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/DatePicker.css';

const DatePicker = ({ selectedTime, setSelectedTime }) => {
  return (
    <div className="date-picker">
      <ReactDatePicker
        selected={selectedTime}
        onChange={(date) => setSelectedTime(date)}
      />
    </div>
  );
};

export default DatePicker;
