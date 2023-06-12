import React from 'react';

function HomeComponent() {
  const trips = [
    { id: 1, destination: 'London', dates: 'June 1 - June 7' },
    { id: 2, destination: 'Paris', dates: 'June 10 - June 15' },
  ];

  return (
    <div>
      <h2>Trip List</h2>
      {trips.map(trip => (
        <div key={trip.id}>
          <h3>{trip.destination}</h3>
          <p>{trip.dates}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeComponent;