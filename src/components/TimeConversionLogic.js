import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const TimeConversionLogic = () => {
  const [ustTime, setUstTime] = useState('');
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const now = moment.utc(); // Get current time in UTC
    setUstTime(now.format('YYYY-MM-DD HH:mm:ss'));
    const istTime = now.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
    setIstTime(istTime);
  }, []);

  return (
    <div>
      <h1>Time Conversion</h1>
      <p><strong>UST Time:</strong> {ustTime}</p>
      <p><strong>IST Time:</strong> {istTime}</p>
    </div>
  );
};

export default TimeConversionLogic;
