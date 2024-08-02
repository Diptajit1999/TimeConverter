import React from 'react';
import '../styles/ReorderButton.css';

const ReorderButton = ({ timezones, setTimezones }) => {
  return (
    <button className="reorder-btn" onClick={() => setTimezones([...timezones].reverse())}>
      ⥮
    </button>
  );
};

export default ReorderButton;
