import React, { useState } from 'react';
import './flight.css';
import 'react-datepicker/dist/react-datepicker.css';
import { faExchangeAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import './DatePickerCustomStyles.css'; // Import your custom CSS for styling the date picker
import Roundtrip from './roundtrip';


function RouteRecommendation() {
  
  const [departureAirport, setDepartureAirport] = useState('');
  const [destinationAirport, setDestinationAirport] = useState('');
  const [recommendedRoutes] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null); // Store the day of the week

  const [tripType, setTripType] = useState('oneWay'); // Default to 'oneWay'
  const [showRoundtripComponent, setShowRoundtripComponent] = useState(false); // Add state for conditional rendering

    //   const [recommendedRoutes, setRecommendedRoutes] = useState([]);

//   const handleRecommendRoutes = () => {
//     // Implement logic to fetch recommended routes based on departureAirport and destinationAirport.
//     // You can use an API like AviationStack to get flight route data.

//     // Example API call (replace with your API endpoint):
//     fetch(`https://api.example.com/routes?departure=${departureAirport}&destination=${destinationAirport}`)
//       .then((response) => response.json())
//       .then((data) => setRecommendedRoutes(data.routes))
//       .catch((error) => console.error(error));
//   };

 //switch response
  const handleSwitchAirport = () => {
    const temp = departureAirport;
    setDepartureAirport(destinationAirport);
    setDestinationAirport(temp);
  };
//OmnmouseEnter
const handleInputMouseEnter = () => {
  // Create a payload object with the required data
  const payload = {
    departure: departureAirport,
      destination: destinationAirport,
      
  };
  // Make a POST request with the payload as JSON
  fetch('https://api.example.com/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify the content type as JSON
    },
    body: JSON.stringify(payload), // Convert the payload to JSON format
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response data here
      console.log(data);
    })
    .catch((error) => console.error(error));
};
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

    // Extract the day of the week as an integer (0 for Sunday, 1 for Monday, etc.)
    const dayOfWeek = date.getDay();
    setDayOfWeek(dayOfWeek);
    // Now, you can use the 'dayOfWeek' variable as needed in your logic
    // console.log(`Selected day of the week: ${dayOfWeek}`);
    console.log(dayOfWeek)
  };


  return (
    <div className="page">
      <h2>Flight Routes</h2>
      {/* List of trip types with radio buttons */}
      <div className="trip-type-container">
        
        <label className="trip-type-label">
          <input
            className="trip-type-input"
            type="radio"
            value="oneWay"
            checked={tripType === 'oneWay'}
            onChange={() => {
              setTripType('oneWay');
              setShowRoundtripComponent(false); }}// Hide the Roundtrip component
          />
          One Way
        </label>
        <label className="trip-type-label">
          <input
            className="trip-type-input"
            type="radio"
            value="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={() => {setTripType('roundTrip')
          setShowRoundtripComponent(true);}}
          
          />
          Round Trip
        </label>
        <label className="trip-type-label">
          <input
            className="trip-type-input"
            type="radio"
            value="multiCity"
            checked={tripType === 'multiCity'}
            onChange={() => {setTripType('multiCity')
          setShowRoundtripComponent(false)}}
          />
          Multi City
        </label>
        <select className="class">
    <option value="option1">Economy</option>
    <option value="option2">Business </option>
    
  </select>
      </div>
      {/* Input fields for From, To, and Date */}
      <div className="input-container" >
        <div className="input-box">
          <label htmlFor="departureAirport"></label>
          <input
            className="from"
            type="text"
            id="departureAirport"
            placeholder="Flying from"
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}onMouseEnter={handleInputMouseEnter}
          />
        </div>
        <div className="input-box">
          <p className="switch" onClick={handleSwitchAirport}>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              onClick={() => {
                const temp = departureAirport;
                setDepartureAirport(destinationAirport);
                setDestinationAirport(temp);
              }}
            />
          </p>
          <label htmlFor="destinationAirport"></label>
          <input
            className="to"
            type="text"
            id="destinationAirport"
            placeholder="Destination"
            value={destinationAirport}
            onChange={(e) => setDestinationAirport(e.target.value)}onMouseEnter={handleInputMouseEnter}
          />
        </div>
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
      {/* Conditional rendering for Roundtrip component */}
      {showRoundtripComponent && <Roundtrip />}
      <ul>
        {recommendedRoutes.map((route, index) => (
          <li key={index}>{route}</li>
        ))}
      </ul>
    </div>
  );
}
export default RouteRecommendation;






