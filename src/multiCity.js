import React, { useState } from 'react';
import './multiCity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import './DatePickerCustomStyles.css';

function MultiCity() {
  const [cities, setCities] = useState([{ from: '', to: '' }]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddCity = () => {
    setCities([...cities, { from: '', to: '' }]);
  };

  const handleDeleteCity = (index) => {
    const updatedCities = cities.filter((_, i) => i !== index);
    setCities(updatedCities);
  };

  const handleChange = (index, field, value) => {
    const updatedCities = cities.map((city, i) =>
      i === index ? { ...city, [field]: value } : city
    );
    setCities(updatedCities);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="multi">
      {cities.map((city, index) => (
        <div className="city-container" key={index}>
          <div className="input-box-from">
            
              <input
                className="froom"
                placeholder="Flying from"
                type="text"
                value={city.from}
                onChange={(e) => handleChange(index, 'from', e.target.value)}
              />
            
          </div>

          
            <p>
              <FontAwesomeIcon icon={faExchangeAlt} />
            </p>
            <div className='input-box-to'>
            <input
              className="too"
              placeholder="Destination"
              type="text"
              value={city.to}
              onChange={(e) => handleChange(index, 'to', e.target.value)}
            />
            </div>
          

          {index > 0 && (
            <button onClick={() => handleDeleteCity(index)}>Delete</button>
          )}
       

      <div className="calendar-button-container">
        <button className="calendar-button" onClick={toggleDatePicker}>
          <FontAwesomeIcon icon={faCalendar} />
        </button>
        {showDatePicker && (
          <div className="date-picker-container">
            {<DatePicker selected={selectedDate} onChange={handleDateChange} inline />}
          </div>
        )}
      </div>
      </div>
      ))}

      <button onClick={handleAddCity}>Add Flight</button>
    </div>
  );
}

export default MultiCity;
