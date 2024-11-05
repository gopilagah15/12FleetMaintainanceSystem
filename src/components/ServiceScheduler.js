import React, { useState } from 'react';

const ServiceScheduler = ({ onScheduleService }) => {
  const [vehicleId, setVehicleId] = useState('');
  const [serviceDate, setServiceDate] = useState('');

  const handleSchedule = (e) => {
    e.preventDefault();
    const newService = { vehicleId, serviceDate };
    onScheduleService(newService);
    setVehicleId('');
    setServiceDate('');
  };

  return (
    <div>
      <h2>Service Scheduler</h2>
      <form onSubmit={handleSchedule}>
        <input placeholder="Vehicle ID" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} />
        <input type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} />
        <button type="submit">Schedule Service</button>
      </form>
    </div>
  );
};

export default ServiceScheduler;
