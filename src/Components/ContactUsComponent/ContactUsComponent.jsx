import React, { useState } from 'react';

function TripCreation() {
  const [tripData, setTripData] = useState({
    destination: '',
    dates: '',
    // Additional fields for the trip
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTripData((prevTripData) => ({
      ...prevTripData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send the tripData to the server
    // and update the app state accordingly
    console.log('Trip data:', tripData);
  };

  return (
    <div>
      <h2>Create a Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={tripData.destination}
            onChange={handleInputChange}
            />
        </label>
        <br />
        <label>
          Dates:
          <input
            type="text"
            name="dates"
            value={tripData.dates}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Additional form fields for the trip */}
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}

export default TripCreation;