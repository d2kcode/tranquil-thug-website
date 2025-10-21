import React from 'react';

const PropertyDetails = () => {
  return (
    <div style={{padding: '4rem 2rem', textAlign: 'center'}}>
      <h1>Haruki Villa - Property Details</h1>
      <p>Detailed property information coming soon...</p>
      <a 
        href="https://www.airbnb.com/rooms/1275311065708744882" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{marginTop: '2rem'}}
      >
        Book on Airbnb
      </a>
    </div>
  );
};

export default PropertyDetails;
