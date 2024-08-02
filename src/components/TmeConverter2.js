import React, { useState } from 'react';
import moment from 'moment-timezone';

const ISTtoUSTConverter = () => {
  const [istTime, setIstTime] = useState('');
  const [period, setPeriod] = useState('AM');
  const [ustTime, setUstTime] = useState('');

  const handleConvert = () => {
    if (istTime === '') {
      alert('Please enter a valid time.');
      return;
    }
    const istMoment = moment.tz(`${istTime} ${period}`, 'hh:mm A', 'Asia/Kolkata');
    const ustMoment = istMoment.clone().utc();
    setUstTime(ustMoment.format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <div>
      <h1>Time Conversion</h1>
      <div>
        <input 
          type="text" 
          value={istTime} 
          onChange={(e) => setIstTime(e.target.value)} 
          placeholder="Enter time (HH:MM)" 
        />
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button onClick={handleConvert}>Convert to UST</button>
      </div>
      {ustTime && (
        <div>
          <h2>Converted Time</h2>
          <p><strong>UST Time:</strong> {ustTime}</p>
        </div>
      )}
    </div>
  );
};

export default ISTtoUSTConverter;
