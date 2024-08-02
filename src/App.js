import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import TimezoneList from "./components/TimezoneList";
import DarkModeToggle from "./components/DarkModeToggle";
import DatePickerComponent from "./components/DatePicker";
import ReorderButton from "./components/ReorderButton";
import ScheduleMeetButton from "./components/ScheduleMeetButton";
import ShareLink from "./components/ShareLink";
import TimeConversionLogic from "./components/TimeConversionLogic";
import TimeConverter from "./components/TimeConverter";
import ISTtoUSTConverter from "./components/TmeConverter2"
const initialTimezones = [
  { name: "UTC", offset: "+0", time: 12 },
  { name: "IST", offset: "+5:30", time: 17.5 },
  // Add other timezones here
];

function App() {
  const [timezones, setTimezones] = useState(initialTimezones);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const handleTimeChange = (index, newTime) => {
    const updatedTimezones = [...timezones];
    updatedTimezones[index].time = newTime;
    setTimezones(updatedTimezones);
  };

  const handleReorder = () => {
    setTimezones([...timezones].reverse());
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Navbar />
        <Breadcrumb />
        <h1>UTC to IST Converter</h1>
        <div className="controls">
          <DatePickerComponent />
          <ScheduleMeetButton />
          <ShareLink link="http://example.com/share" />
          <ReorderButton onClick={handleReorder} />{" "}
          {/* Added onClick handler */}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />{" "}
          {/* Pass down darkMode and setDarkMode */}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <TimezoneList
                timezones={timezones}
                onTimeChange={handleTimeChange}
              />
            }
          />
        </Routes>
        {/* <TimeConversionLogic/> */}
        <TimeConverter/>
        <ISTtoUSTConverter/>
      </div>
    </Router>
  );
}

export default App;
