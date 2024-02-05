

import React, { useState } from 'react';

const Socket = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleStateChange = (e) => {
    const stateId = parseInt(e.target.value, 10);
    setSelectedState(stateId);
    setSelectedLocation(null);
  };

  const handleLocationChange = (e) => {
    const locationId = parseInt(e.target.value, 10);
    setSelectedLocation(locationId);
  };

  return (
    <div>
      <label htmlFor="stateDropdown">Select State:</label>
      <select id="stateDropdown" onChange={handleStateChange} value={selectedState || ''}>
        <option value="">Select State</option>
        {stateData.map((state) => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>

      {selectedState && (
        <>
          <label htmlFor="locationDropdown">Select Location:</label>
          <select id="locationDropdown" onChange={handleLocationChange} value={selectedLocation || ''}>
            <option value="">Select Location</option>
            {cityData[selectedState].map((city) => (
              districtData[city.id].map((district) => (
                <option key={district.id} value={district.id}>
                  {city.name}, {district.name}
                </option>
              ))
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default Socket;


const stateData = [
    { id: 1, name: 'State 1' },
    { id: 2, name: 'State 2' },
    // Add more states as needed
  ];
  
  const cityData = {
    1: [
      { id: 11, name: 'City 1-1' },
      { id: 12, name: 'City 1-2' },
      // Add more cities for State 1
    ],
    2: [
      { id: 21, name: 'City 2-1' },
      { id: 22, name: 'City 2-2' },
      // Add more cities for State 2
    ],
    // Add more cities for other states
  };
  
  const districtData = {
    11: [
      { id: 111, name: 'District 1-1-1' },
      { id: 112, name: 'District 1-1-2' },
      // Add more districts for City 1-1
    ],
    12: [
      { id: 121, name: 'District 1-2-1' },
      { id: 122, name: 'District 1-2-2' },
      // Add more districts for City 1-2
    ],
    21: [
      { id: 211, name: 'District 2-1-1' },
      { id: 212, name: 'District 2-1-2' },
      // Add more districts for City 2-1
    ],
    22: [
      { id: 221, name: 'District 2-2-1' },
      { id: 222, name: 'District 2-2-2' },
      // Add more districts for City 2-2
    ],
    // Add more districts for other cities
  };
  