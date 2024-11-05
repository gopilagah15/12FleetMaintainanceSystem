import React from 'react';

const VehiclePerformanceReport = ({ requests, costs, scheduledServices }) => {
  const totalCost = costs.reduce((acc, cost) => acc + cost.amount, 0);

  return (
    <div>
      <h2>Vehicle Performance Report</h2>
      <h3>Total Requests: {requests.length}</h3>
      <h3>Total Scheduled Services: {scheduledServices.length}</h3>
      <h3>Total Maintenance Cost: ${totalCost}</h3>
    </div>
  );
};

export default VehiclePerformanceReport;
