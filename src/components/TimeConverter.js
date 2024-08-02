import React, { useState } from 'react';
import moment from 'moment-timezone';

const TimeConverter = () => {
  const [ustTime, setUstTime] = useState('');
  const [period, setPeriod] = useState('AM');
  const [istTime, setIstTime] = useState('');

  const handleConvert = () => {
    if (ustTime === '') {
      alert('Please enter a valid time.');
      return;
    }
    const ustMoment = moment.utc(`${ustTime} ${period}`, 'hh:mm A');
    const istMoment = ustMoment.clone().tz('Asia/Kolkata');
    setIstTime(istMoment.format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <div>
      <h1>Time Conversion</h1>
      <div>
        <input 
          type="text" 
          value={ustTime} 
          onChange={(e) => setUstTime(e.target.value)} 
          placeholder="Enter time (HH:MM)" 
        />
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button onClick={handleConvert}>Convert to IST</button>
      </div>
      {istTime && (
        <div>
          <h2>Converted Time</h2>
          <p><strong>IST Time:</strong> {istTime}</p>
        </div>
      )}
    </div>
  );
};

export default TimeConverter;
