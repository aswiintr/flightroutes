// To fetch data from an endpoint instead of using dummy data in a React component, you can use the `fetch` API or a library like `axios` to make an HTTP request to the desired endpoint. Here's an example of how you can modify the previous example to fetch data from an endpoint:

// Assuming you have an endpoint that returns a list of products in JSON format, you can fetch and filter data like this:

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AirlinesList() {
  const [airlinesData, setAirlinesData] = useState([]);
  const [iataCodes, setIataCodes] = useState([]);
  const [selectedIataCode, setSelectedIataCode] = useState('');
  const [filteredAirlines, setFilteredAirlines] = useState([]);

  useEffect(() => {
    // Fetch airlines data from your API endpoint when the component mounts
    axios.get('https://api.example.com/airlines')
      .then(response => {
        const data = response.data;
        setAirlinesData(data.airlines);

        // Extract unique IATA codes from the data
        const uniqueIataCodes = [...new Set(data.airlines.map(airline => airline.iataCode))];
        setIataCodes(uniqueIataCodes);
      })
      .catch(error => {
        console.error('Error fetching airlines data:', error);
      });
  }, []);

  useEffect(() => {
    // Apply filters when the selectedIataCode changes
    if (selectedIataCode === '') {
      setFilteredAirlines(airlinesData);
    } else {
      const filteredResult = airlinesData.filter(airline => airline.iataCode === selectedIataCode);
      setFilteredAirlines(filteredResult);
    }
  }, [selectedIataCode, airlinesData]);

  return (
    <div>
      <h1>Airlines List</h1>
      <label>
        Filter by IATA Code:
        <select
          value={selectedIataCode}
          onChange={(e) => setSelectedIataCode(e.target.value)}
        >
          <option value="">All</option>
          {iataCodes.map((iataCode, index) => (
            <option key={index} value={iataCode}>
              {iataCode}
            </option>
          ))}
        </select>
      </label>

      <ul>
        {filteredAirlines.map((airline, index) => (
          <li key={index}>{airline.iataCode} - {airline.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AirlinesList;




// In this modified example:

// 1. We use the `useEffect` hook to fetch data from the specified API endpoint when the component mounts.
// 2. The fetched data is stored in the `data` and `filteredData` state variables.
// 3. The `applyFilters` function now filters the `data` state instead of a dummy data array.
// 4. When the "Apply Filters" button is clicked, it filters the fetched data based on the selected category.
// 5. The filtered data is then displayed in the component.

// Make sure to replace `'https://api.example.com/products'` with the actual URL of your API endpoint. This example demonstrates how to integrate data fetching and filtering into a React component.