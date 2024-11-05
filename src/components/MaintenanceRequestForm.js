import React, { useState } from 'react';

const MaintenanceRequestForm = ({ onAddRequest }) => {
  const [vehicleId, setVehicleId] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      vehicleId,
      issue,
      date: new Date().toLocaleDateString()
    };
    onAddRequest(newRequest);
    setVehicleId('');
    setIssue('');
  };

  return (
    <div>
      <h2>Maintenance Request Form</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Vehicle ID" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} />
        <input placeholder="Issue" value={issue} onChange={(e) => setIssue(e.target.value)} />
        <button type="submit">Add Request</button>
      </form>
    </div>
  );
};

export default MaintenanceRequestForm;
