import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './datepicker.css';
function CalendarButton() {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      <button className="sidebar-button" onClick={toggleCalendar}>
        <span><FontAwesomeIcon icon={faCalendar} /> </span>
      </button>

      {showCalendar && (
        <div className="calendar-container">
          <Calendar />
        </div>
      )}
    </div>
  );
}

export default CalendarButton;
