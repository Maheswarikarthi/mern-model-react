import React, { useState, useEffect } from 'react';

function TravelOrganizer() {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState('');
  const [editingTripIndex, setEditingTripIndex] = useState(-1);
  const [tripDetails, setTripDetails] = useState('');

  useEffect(() => {
    const storedTrips = localStorage.getItem('trips');
    if (storedTrips) {
      setTrips(JSON.parse(storedTrips));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  const addTrip = () => {
    if (newTrip.trim() !== '') {
      setTrips([...trips, { name: newTrip, details: '' }]);
      setNewTrip('');
    }
  };

  const removeTrip = (index) => {
    const updatedTrips = [...trips];
    updatedTrips.splice(index, 1);
    setTrips(updatedTrips);
  };

  const startEditing = (index) => {
    setEditingTripIndex(index);
    setTripDetails(trips[index].details);
  };

  const cancelEditing = () => {
    setEditingTripIndex(-1);
    setTripDetails('');
  };

  const saveDetails = () => {
    const updatedTrips = [...trips];
    updatedTrips[editingTripIndex].details = tripDetails;
    setTrips(updatedTrips);
    setEditingTripIndex(-1);
    setTripDetails('');
  };

  return (
    <div>
      <h1>Travel Organizer</h1>
      <input
        type="text"
        value={newTrip}
        onChange={(e) => setNewTrip(e.target.value)}
        placeholder="Enter trip name"
      />
      <button onClick={addTrip}>Add Trip</button>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            {editingTripIndex === index ? (
              <div>
                <input
                  type="text"
                  value={tripDetails}
                  onChange={(e) => setTripDetails(e.target.value)}
                  placeholder="Enter trip details"
                />
                <button onClick={saveDetails}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </div>
            ) : (
              <div>
                <div>{trip.name}</div>
                {trip.details && <div>{trip.details}</div>}
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => removeTrip(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelOrganizer;



