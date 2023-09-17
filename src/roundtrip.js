import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Roundtrip.css';
function Roundtrip() {
  const [startDate,setStartDate] = useState(null);
  const [endDate,setEndDate] = useState(null);

  const [dayOfWeek, setDayOfWeek] = useState(null); // Store the day of the week

  const handleStartDateChange = (date) => {
    // Extract the day of the week as an integer (0-6)
    const dayOfWeek = date.getDay();
    setStartDate(date);
    setDayOfWeek(dayOfWeek);
    // Now, you can use the 'dayOfWeek' variable as needed in your logic
    // console.log(`Selected day of the week: ${dayOfWeek}`);
    console.log(dayOfWeek)
  };
  
  const handleEndDateChange = (date) => {
    // Extract the day of the week as an integer (0-6)
    const dayOfWeek = date.getDay();
    setEndDate(date);
    setDayOfWeek(dayOfWeek);
    // Now, you can use the 'dayOfWeek' variable as needed in your logic
    // console.log(`Selected day of the week: ${dayOfWeek}`);
    console.log(dayOfWeek)
  };
  return (
    <div className="date-picker-container">
      <div>
        
        <DatePicker className="placeholder"
        placeholderText="start"
         selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        
        <DatePicker className="placeholder"
        placeholderText="return"
          selected={endDate} onChange={handleEndDateChange} />
      </div>
    </div>
  );
}
export default Roundtrip;
